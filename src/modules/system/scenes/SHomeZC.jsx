//???????????
import React from 'react';

import CGitContent from '../components/CGitContent';
import CGitAddModal from '../components/CGitAddModal';
import CContentBody from '../components/CContentBody';
import { Form, Input, Modal, Button, Row, Col, Icon, message } from 'antd';

import '../../../static/css/homeZC.less';


const SHomeZC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a>??</a></li>
          <li><a>??</a></li>
        </ul>
      </nav>

      <div className="contentBody">
        <div>
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
              <div className="gutter-box"><CGitContent></CGitContent> </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box"><CGitContent></CGitContent> </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box"><CGitAddModal></CGitAddModal> </div>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  );
};//????

export default SHomeZC;
