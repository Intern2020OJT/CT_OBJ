/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Row, Col } from 'antd';

import CTimeSelecter from './CTimeSelecter/CTimeSelecter';

const CSearchCondition = (props) => {
  const [state, setState] = useState();
  const getTime = (date) => {
    props.func(date);
  };
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Col><CTimeSelecter func={getTime} /></Col>
      </Row>
    </div>
  );
};
  
export default CSearchCondition;
