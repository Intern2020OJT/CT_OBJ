import React, { useState } from 'react';

import { Form, Input, Button, Row, Col, Icon, message } from 'antd';

import CGitContent from './CGitContent';
import CGitAddModal from './CGitAddModal';

import '../../../static/css/homeZC.less';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

function CContentBody(props) {
  const [componentArray, setComponentArray] = useState([{ name: 'test' }, { name: 'test' }, { name: 'test' }, { name: 'test' }, { name: 'test' }, { name: 'test' }, { name: 'test' }]);
  const receiveComponentArrayChange = (res) => {
    const i = [...componentArray];
    // var j= componentArray //为什么不能达到效果
    console.log(i);
    // console.log(j)
    console.log(res);
    const ProgramName = res.data.name;
    i.push({ name: ProgramName });
    setComponentArray(i);
    
    // console.log(componentArray)
  };// 子向父传值，父当设一state一接收函数，于子使用处添设属性，将接收函数之名作为props传入，此处为接收函数
  const componentList = componentArray;
  console.log(componentList);


  return (

    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
      {
        componentList.map((item, index) => (
          <Col className="gutter-row" span={6}>
            <div className="gutter-box"><CGitContent CheckboxState={props.CheckboxState} key={index} ContentName={item} /> </div>
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
