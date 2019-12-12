import React from 'react';
import { Row, Col } from 'antd';

import CClassifyLablesAnalyse from './CClassifyLabelsAnalyse/CClassifyLabelsAnalyse';
import CClassifyAssigneesAnalyse from './CClassifyAssigneesAnalyse/CClassifyAssigneesAnalyse';

const CClassifyAnalyse = () => {
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Col>
          <CClassifyLablesAnalyse />
        </Col>
        <Col>
          <CClassifyAssigneesAnalyse />
        </Col>
      </Row>
    </div>
  );
};

export default CClassifyAnalyse;
