
/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// ???????????
import React, { useState } from 'react';
import $ from 'jquery';


import { ROUTE_ANALYSIS } from '../../../utils/constants';

import CContentBody from '../components/CContentBody';

import '../../../static/css/homeZC.less';


const SHomeZC = (props) => {
  const styleVisibility = {
    // visibility:"hidden"
    display: 'none'
  };

  let pullData = null;

  const [ableCheckboxState, setableCheckboxState] = useState('hidden');
  const [buttonPut, setButtonPut] = useState();
  const ableCheckbox = () => {
    if (ableCheckboxState === 'hidden') {
      setableCheckboxState('visible');
      // console.log("1"+ableCheckboxState)
      document.getElementById('selectesA').innerHTML = '取消';
      document.getElementById('submitA').style.display = 'block';
      document.getElementById('updateA').style.display = 'block';
      document.getElementById('deleteA').style.display = 'block';
    } else {
      setableCheckboxState('hidden');
      document.getElementById('selectesA').innerHTML = '多选';
      document.getElementById('submitA').style.display = 'none';
      document.getElementById('updateA').style.display = 'none';
      document.getElementById('deleteA').style.display = 'none';
      // console.log("2"+ableCheckboxState)
    }
  };
  const getSonComponentsData = (res) => {
    pullData = res;
  };
  const itemsStatis = () => {

    if (pullData !== null) {
      if (pullData.length > 1) {
        props.history.push(ROUTE_ANALYSIS, { pullData: pullData });
      }
    }
  };
  // 跳转到多个统计页面并传值
  const itemUpdate = () => {
    const BaseUrl = `${process.env.REACT_APP_API_URL}`;
    let returnFlag;
    if (pullData !== null) {
      const Url = `${BaseUrl}/updateData`;
      $.ajax(
        {
          url: Url,
          type: 'post',
          async: false,
          dataType: 'json',
          data: JSON.stringify(pullData),
          success: function (data) {
            returnFlag = data;
          }
        }
      );
    }
  };// 更新
  const itemDelete = () => {
    setButtonPut('_DELETE');
    const BaseUrl = `${process.env.REACT_APP_API_URL}`;
    let returnFlag;
    if (pullData !== null) {
      const Url = `${BaseUrl}/deleteData`;
      $.ajax(
        {
          url: Url,
          type: 'post',
          async: false,
          dataType: 'json',
          data: JSON.stringify(pullData),
          success: function (data) {
            returnFlag = data;
          }
        }
      );
    }
  };// 删除

  return (
    <div id="headAndBody">
      <nav>
        <ul>
          <li><a id="updateA" style={styleVisibility} onClick={itemUpdate}>更新</a></li>
          <li><a id="deleteA" style={styleVisibility} onClick={itemDelete}>删除</a></li>
          <li><a id="submitA" style={styleVisibility} onClick={itemsStatis}>分析</a></li>
          <li><a id="selectesA" onClick={ableCheckbox}>多选</a></li>
        </ul>
      </nav>
      <div className="contentBody">
        <div>

          <CContentBody CheckboxState={ableCheckboxState} toFather={getSonComponentsData} history={props.history} buttonPut={buttonPut} />


        </div>
      </div>

    </div>
  );
};// ????

export default SHomeZC;
