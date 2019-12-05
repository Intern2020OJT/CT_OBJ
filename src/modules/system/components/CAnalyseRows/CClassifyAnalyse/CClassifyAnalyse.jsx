import React from 'react';
import { Row, Col } from 'antd';

import CClassifyLablesAnalyse from './CClassifyLabelsAnalyse/CClassifyLabelsAnalyse';
import CClassifyAssigneesAnalyse from './CClassifyAssigneesAnalyse/CClassifyAssigneesAnalyse';

const CClassifyAnalyse = () => {
  return (
    
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} type="flex" justify="center">
      <Col>
        <CClassifyLablesAnalyse />
      </Col>
      <Col>
        <CClassifyAssigneesAnalyse />
      </Col>
    </Row>
  );
};

export default CClassifyAnalyse;
