import React, { useState } from 'react';
import $ from 'jquery';
import { Form, Input, Modal, Button, Spin, Row, Col, Icon, message } from 'antd';

import '../../../static/css/CGitAddModal.less';
import '../../../static/css/CGitContent.less';

// import { AddGitContent } from '../../../utils/AddGitContent';

function CGitAddModal(props) {
  const [loading, setloading] = useState(false);
  const [visible, setvisible] = useState(false);
  const showModal = () => {
    setvisible(true);
  };

  const handleOk = () => {
    // setTimeout(() => {

    const IntrosData = {
      IntrosData1, IntrosData1,
    };
    let IntrosData1;
    let IntrosData2;
    const BaseUrl = `${process.env.REACT_APP_API_URL}`;
    const Url = `${BaseUrl}/introsgit?${document.getElementById('inputUrl').value}`;
    var ajaxTimeoutTest = $.ajax({
      url: Url,
      type: 'get',
      timeout: 1000,
      async: false,
      dataType: 'json',
      success: function (data) {
        IntrosData1 = data;
      },
      error: function (err) {
        console.log(err);
      },
      complete: function (XMLHttpRequest, status) { // 请求完成后最终执行参数
        if (status == 'timeout') { // 超时,status还有success,error等值的情况
          ajaxTimeoutTest.ajax.abort(); // 取消请求
          alert('超时');
        }
      }
    });
    const Url2 = `${BaseUrl}/introsgits?${document.getElementById('inputUrl').value}`;
    var ajaxTimeoutTest2 = $.ajax({
      url: Url2,
      type: 'get',
      timeout: 1000,
      async: false,
      dataType: 'json',
      success: function (data) {
        IntrosData2 = data;
      },
      error: function (err) {
        console.log(err);
      },
      complete: function (XMLHttpRequest, status) { // 请求完成后最终执行参数
        if (status == 'timeout') { // 超时,status还有success,error等值的情况
          ajaxTimeoutTest2.ajax.abort(); // 取消请求
          alert('超时');
        }
      }
    });
    IntrosData.IntrosData1 = IntrosData1;
    IntrosData.IntrosData2 = IntrosData2;
    console.log(IntrosData);
    props.inAdd(IntrosData);


    //      }, 1);
    setloading(false);
    setvisible(false);
  };

  const handleCancel = () => {
    setvisible(false);
  };


  return (
    <div>
      <div className="divContaner " onClick={showModal}>
        <div className="AddDivBlock divBlock">
          <svg t="1575510123505" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1410" width="90" height="90"><path d="M937 442.66H547V86.25a35 35 0 0 0-70 0v356.41H87a35 35 0 0 0 0 70h390V871a35 35 0 0 0 70 0V512.66h390a35 35 0 1 0 0-70z" fill="#CCCCCC" p-id="1411" /></svg>
        </div>
      </div>
      <Spin tip="Loading..." spinning={loading}>
        <Modal

          visible={visible}
          title="导入issues"

          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
                            返回
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={function (event) { handleOk(); }}>
                            导入
            </Button>,
          ]}
        >
          <div>
            <span>git url:</span><input className="gitIntrosInput" id="inputUrl" required="required" />
          </div>
        </Modal>
      </Spin>

    </div>
  );
}

export default CGitAddModal;
