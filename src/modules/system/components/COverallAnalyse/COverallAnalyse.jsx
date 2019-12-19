import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';

import { API_OVERALL } from '../../../../utils/constants';
import { get } from '../../../../utils/fetch';

import CTotal from './CTotal/CTotal';
import CAverageTime from './CAverageTime/CAverageTime';
import CRetentionRate from './CRetentionRate/CRetentionRate';
import COpenNumber from './COpenNumber/COpenNumber';

const COverallAnalyse = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fdata = await get(API_OVERALL);
      console.log(fdata);
      setData(fdata);
    };
    fetchData();
  }, []);
  return (
    <div style={{ padding: '10px', margin: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Card style={{ width: '1220px', height: '210px' }}>
          <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
            <Row gutter={[20, 15]} type="flex" justify="center">
              <Col><CTotal total={data.total} /></Col>
              <Col><CAverageTime averageTime={data.averageTime} /></Col>
              <Col><COpenNumber opening={data.opening} /></Col>
              <Col><CRetentionRate retentionRate={data.retentionRate} /></Col>
            </Row>
          </div>
        </Card>
      </Row>
    </div>
  );
};

export default COverallAnalyse;
