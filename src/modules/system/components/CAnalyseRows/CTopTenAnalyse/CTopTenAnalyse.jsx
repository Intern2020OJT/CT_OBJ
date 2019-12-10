import React from 'react';
import { Row, Col } from 'antd';

import CTimeTopTen from './CTimeTopTen/CTimeTopTen';
import CCommentsTopTen from './CCommentsTopTen/CCommentsTopTen';

const CTopTenAnalyse = () => {
  
  return (
    <Row gutter={[10, 150]} type="flex" justify="center">
      <Col>
        <CTimeTopTen />
      </Col>
      <Col>
        <CCommentsTopTen />
      </Col>
    </Row>
  );
};

export default CTopTenAnalyse;
