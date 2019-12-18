/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React from 'react';
import { Row, Col } from 'antd';

import CTimeTopTen from './CTimeTopTen/CTimeTopTen';
import CCommentsTopTen from './CCommentsTopTen/CCommentsTopTen';

const CTopTenAnalyse = props => {
  const start = props.start;
  const end = props.end;
  const objName = props.objName;
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Col>
          <CTimeTopTen objName={objName} start={start} end={end} />
        </Col>
        <Col>
          <CCommentsTopTen objName={objName} start={start} end={end} />
        </Col>
      </Row>
    </div>
  );
};

export default CTopTenAnalyse;
