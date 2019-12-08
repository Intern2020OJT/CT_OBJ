import React from 'react';
import { Row, Col } from 'antd';
import CTotal from './CTotal/CTotal'
import CAverageTime from './CAverageTime/CAverageTime'

require('../../../../static/css/COverallAnalyse.less');

const COverallAnalyse = () => {
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} type="flex" justify="center">
        <Col><CTotal /></Col>
        <Col><CAverageTime /></Col>
        <Col><CTotal /></Col>
        <Col><CAverageTime /></Col>
      </Row>
    </div>
  );
};

export default COverallAnalyse;
