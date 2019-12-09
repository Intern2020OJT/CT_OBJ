import React, { useState } from 'react';

import CGitContent from '../components/CGitContent';
import CGitAddModal from '../components/CGitAddModal';
import { Form, Input, Button, Row, Col, Icon, message } from 'antd';

import '../../../static/css/homeZC.less';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

function CContentBody() {
  const [componentArray, setComponentArray] = useState(3);
  const receiveComponentArrayChange = () => {
    var i = componentArray;
    setComponentArray(i + 1);
    //console.log(componentArray)
  }//子向父传值，父当设一state一接收函数，于子使用处添设属性，将接收函数之名作为props传入，此处为接收函数
  
  return (

    <Row gutter={[16, 20]}>

      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent></CGitContent> </div>
      </Col>

      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitAddModal inAdd={receiveComponentArrayChange}></CGitAddModal> </div>
      </Col>
    </Row>

  );
}

export default CContentBody;