import React, { useState } from 'react';

import CGitContent from '../components/CGitContent';
import CGitAddModal from '../components/CGitAddModal';
import { Form, Input, Button, Row, Col, Icon, message } from 'antd';

import '../../../static/css/homeZC.less';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

function CContentBody(props) {
  const [componentArray, setComponentArray] = useState([{},{},{}]);
  const receiveComponentArrayChange = () => {
    var i = [...componentArray];
    //var j= componentArray //为什么不能达到效果
    console.log(i)
    //console.log(j)
    i.push({});
    setComponentArray(i);
    
    //console.log(componentArray)
  }//子向父传值，父当设一state一接收函数，于子使用处添设属性，将接收函数之名作为props传入，此处为接收函数
  let componentList=componentArray;
  console.log(componentList)




  return (

    <Row gutter={[16, 20]}>
      {
        componentList.map((item,index)=> (
          <Col className="gutter-row" span={6}>
            <div className="gutter-box"><CGitContent CheckboxState={props.CheckboxState} key={index} ></CGitContent> </div>
        </Col>
        ))

      }
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent CheckboxState={props.CheckboxState}></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent CheckboxState={props.CheckboxState}></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent CheckboxState={props.CheckboxState}></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent CheckboxState={props.CheckboxState}></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent CheckboxState={props.CheckboxState}></CGitContent> </div>
      </Col>

      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitAddModal inAdd={receiveComponentArrayChange}></CGitAddModal> </div>
      </Col>
    </Row>

  );
    
}

export default CContentBody;