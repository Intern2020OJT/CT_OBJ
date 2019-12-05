import React from 'react';
import { Row, Col } from 'antd';

import SClassifyLablesAnalyse from './SClassifyLabelsAnalyse/SClassifyLabelsAnalyse';
import SClassifyAssigneesAnalyse from './SClassifyAssigneesAnalyse/SClassifyAssigneesAnalyse';

const SClassifyAnalyse = () => {
  return (
    
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} type="flex" justify="center">
      <Col span={8}>
        <SClassifyLablesAnalyse />
      </Col>
      <Col span={8}>
        <SClassifyAssigneesAnalyse />
      </Col>
    </Row>
  );
};

export default SClassifyAnalyse;
