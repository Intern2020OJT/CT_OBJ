/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import $ from 'jquery';
import { Modal, Button, Spin } from 'antd';

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
    if (document.getElementById('inputUrl').value !== null && document.getElementById('inputUrl').value !== '') {
      let IntrosData;
      const BaseUrl = `${process.env.REACT_APP_API_URL}`;
      const Url2 = `${BaseUrl}/introsgits?${document.getElementById('inputUrl').value}`;
      $.ajax({
        url: Url2,
        type: 'get',
        async: false,
        dataType: 'json',
        success: function (data) {
          IntrosData = data;
        },
        error: function (err) {
          console.log(err);
        }
      });
      let judge = props.inAdd(IntrosData);
      if (judge !== '_IS_faile') {
        setvisible(false);
        setloading(false);
      }
    }
    // 或需加错误提示
    //      }, 1);
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
