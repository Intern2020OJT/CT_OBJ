/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React from 'react';
import { Row, Col } from 'antd';

import CClassifyLablesAnalyse from './CClassifyLabelsAnalyse/CClassifyLabelsAnalyse';
import CClassifyAssigneesAnalyse from './CClassifyAssigneesAnalyse/CClassifyAssigneesAnalyse';

const CClassifyAnalyse = props => {
  const start = props.start;
  const end = props.end;
  const objName = props.objName;
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Col>
          <CClassifyLablesAnalyse objName={objName} start={start} end={end} />
        </Col>
        <Col>
          <CClassifyAssigneesAnalyse objName={objName} start={start} end={end} />
        </Col>
      </Row>
    </div>
  );
};

export default CClassifyAnalyse;
