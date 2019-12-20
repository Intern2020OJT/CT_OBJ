/* eslint-disable no-else-return */
/* eslint-disable brace-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-continue */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import $ from 'jquery';
import { Row, Col, notification } from 'antd';

import CGitContent from './CGitContent';
import CGitAddModal from './CGitAddModal';

import '../../../static/css/homeZC.less';

function CContentBody(props) {
  const Url = 'http://localhost:3000/issues/HomegetDBData';
  let IntrosData = null;
  var selectSItem = []; // 多选数块时使用
  // eslint-disable-next-line no-unused-vars
  let selectItem; // 单选一个块时使用
  $.ajax({
    url: Url,
    type: 'get',
    async: false,
    dataType: 'json',
    success: function (data) {
      IntrosData = data;
    },
    error: function (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  });
  const midChar = [];
  for (let num = 0; IntrosData.data[num] !== undefined; num++) {
    const nameAndurl = {
      name: IntrosData.data[num].name,
      html_url: IntrosData.data[num].html_url
    };
    midChar.push(nameAndurl);
  }
  const [componentArray, setComponentArray] = useState(midChar);
  const openNotification = (res) => {
    if (res === '_DELETE_OK') {
      notification.open({
        message: '提醒',
        description:
          '删除成功',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    } else if (res === '_UPDATE_OK') {
      notification.open({
        message: '提醒',
        description:
          '更新成功',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    } else if (res === '_HAD_DATA') {
      notification.open({
        message: '提醒',
        description:
          '已有项目，更新成功',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    } else if (res === '_IS_fail') {
      notification.open({
        message: '提醒',
        description:
          '操作失败，请检查输入的链接或者网络连接',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }
  }; // 操作提示
  const toCheck = (res) => {
    if (res.data === '_DELETE_OK') {
      let stateData = [...componentArray];
      for (let i = 0; i < selectSItem.length; i++) {
        for (let j = 0; j < stateData.length; j++) {
          if (selectSItem[i].name === stateData[j].name) {
            selectSItem[i].html_url = stateData[j].html_url;
            stateData.splice(j, 1);
          }
        }
      }
      setComponentArray(stateData);
      openNotification(res.data);
    } // 确认父页面所按按钮来操作此部件相关事务
    else if (res.data === '_UPDATE_OK') {
      openNotification(res.data);
    }
  };
  const receiveComponentArrayChange = (res) => {
    const i = [...componentArray];
    // var j= componentArray //为什么不能达到效果
    if (res.data !== '_IS_faile') {
      if (res.data !== '_HAD_DATA') {
        const ProgramName = res.data.name;
        i.push({ name: ProgramName, html_url: res.data.html_url });
        setComponentArray(i);
        return '_ADD_OK';
      }
      else {
        openNotification(res.data);
        return '_HAD_DATA';
      }
    }
    openNotification(res.data);
    return '_IS_faile';
  };// 子向父传值，父当设一state一接收函数，于子使用处添设属性，将接收函数之名作为props传入，此处为接收函数
  const receiveCheckStateAndName = (res) => {
    if (res.checkState === true) {
      // eslint-disable-next-line no-shadow
      // eslint-disable-next-line prefer-const
      let midChar = {
        name: res.returnName
      };
      selectSItem.push(midChar);
    } else {
      for (let i = 0; selectSItem[i] !== undefined; i++) {
        if (res.returnName === selectSItem[i].name) {
          selectSItem.splice(i, 1);
          break;
          // eslint-disable-next-line no-continue
        } else continue;
      }
    }
    for (let i = 0; i < selectSItem.length; i++) {
      for (let j = 0; j < componentArray.length; j++) {
        if (selectSItem[i].name === componentArray[j].name) {
          selectSItem[i].html_url = componentArray[j].html_url;
          break;
        }
      }
    }
    props.toFather(selectSItem, toCheck);
  };// 主要用于多选时，单选时直接跳转，不走此路


  const componentList = componentArray;


  return (

    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
      {
        componentList.map((item, index) => (
          <Col className="gutter-row" span={6}>
            <div className="gutter-box"><CGitContent CheckboxState={props.CheckboxState} key={index} ContentName={item} returnData={receiveCheckStateAndName} history={props.history} /> </div>
          </Col>
        ))
        // map即为当前序列元素内容
      }
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitAddModal inAdd={receiveComponentArrayChange} /> </div>
      </Col>
    </Row>

  );
}

export default CContentBody;
