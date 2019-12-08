import React from 'react';
import { Row, Col } from 'antd';
import CTimeSelecter from './CTimeSelecter/CTimeSelecter'

const CSearchCondition = () => {
    return (
        <div style={{ padding: '10px' }}>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} type="flex" justify="center">
                <Col><CTimeSelecter /></Col>
            </Row>
        </div>
    );
  };
  
  export default CSearchCondition;
  