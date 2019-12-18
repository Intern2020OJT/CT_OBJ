import React from 'react';
import { Row, Col, Card } from 'antd';

import CTotal from './CTotal/CTotal';
import CAverageTime from './CAverageTime/CAverageTime';
import CRetentionRate from './CRetentionRate/CRetentionRate';
import COpenNumber from './COpenNumber/COpenNumber';


const COverallAnalyse = () => {
  return (
    <div style={{ padding: '10px', margin: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Card style={{ width: '1220px', height: '210px' }}>
          <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
            <Row gutter={[20, 15]} type="flex" justify="center">
              <Col><CTotal /></Col>
              <Col><CAverageTime /></Col>
              <Col><COpenNumber /></Col>
              <Col><CRetentionRate /></Col>
            </Row>
          </div>
        </Card>
      </Row>
    </div>
  );
};

export default COverallAnalyse;
