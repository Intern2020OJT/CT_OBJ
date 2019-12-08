import React from 'react';

import CGitContent from '../components/CGitContent';
import { Form, Input, Button, Row,Col, Icon, message } from 'antd';

import '../../../static/css/homeZC.less';

function CContentBody() {
    return (
        <div className="contentBody">
        <div>
        <Row gutter={[16,20]}>
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
        <div className="gutter-box"><CGitContent></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><CGitContent></CGitContent> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"> </div>
      </Col>
    </Row>
        </div>
      </div> 
    );
  } 
  
  export default CContentBody;