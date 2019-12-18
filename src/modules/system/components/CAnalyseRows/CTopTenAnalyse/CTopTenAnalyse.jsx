import React from 'react';
import { Row, Col } from 'antd';

import CTimeTopTen from './CTimeTopTen/CTimeTopTen';
import CCommentsTopTen from './CCommentsTopTen/CCommentsTopTen';

const CTopTenAnalyse = () => {
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Col>
          <CTimeTopTen />
        </Col>
        <Col>
          <CCommentsTopTen />
        </Col>
      </Row>
    </div>
  );
};

export default CTopTenAnalyse;
