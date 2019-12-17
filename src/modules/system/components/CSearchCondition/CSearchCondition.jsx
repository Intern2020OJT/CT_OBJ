import React from 'react';
import { Row, Col } from 'antd';
import CTimeSelecter from './CTimeSelecter/CTimeSelecter'

const CSearchCondition = () => {
    return (
        <div style={{ padding: '10px' }}>
            <Row gutter={[20,15]} type="flex" justify="center">
                <Col><CTimeSelecter /></Col>
            </Row>
        </div>
    );
  };
  
  export default CSearchCondition;
  