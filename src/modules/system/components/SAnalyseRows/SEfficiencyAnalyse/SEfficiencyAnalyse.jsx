import React from 'react';
import { Row, Col, Card } from 'antd';

import SEfficiencyAnalyseCurve from './SEfficiencyAnalyseCurve';

const SEfficiencyAnalyse = () => {
  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} type="flex" justify="center">
      <Col>
        <Card
          style={{ width: '1245px', height: '500px' }}
          title="平均对应时间分析"
        >
          <SEfficiencyAnalyseCurve />
        </Card>
                
      </Col>
    </Row>
  );
};

export default SEfficiencyAnalyse;
