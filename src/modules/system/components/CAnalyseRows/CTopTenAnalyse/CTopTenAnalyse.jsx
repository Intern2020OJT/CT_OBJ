import React from 'react';
import { Row, Col } from 'antd';

import CTimeTopTen from './CTimeTopTen/CTimeTopTen';
import CCommentsTopTen from './CCommentsTopTen/CCommentsTopTen';

const CTopTenAnalyse = props => {
  const objName = props;
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Col>
          <CTimeTopTen objName={objName} />
        </Col>
        <Col>
          <CCommentsTopTen objName={objName} />
        </Col>
      </Row>
    </div>
  );
};

export default CTopTenAnalyse;
