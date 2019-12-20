/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';

import { API_OVERALL } from '../../../../utils/constants';
import { get } from '../../../../utils/fetch';

import CTotal from './CTotal/CTotal';
import CAverageTime from './CAverageTime/CAverageTime';
import CRetentionRate from './CRetentionRate/CRetentionRate';
import COpenNumber from './COpenNumber/COpenNumber';

const COverallAnalyse = props => {
  const [data, setData] = useState([]);
  const prjName = props.projectName.name;
  useEffect(() => {
    const fetchData = async () => {
      const fdata = await get(API_OVERALL, { prjName });
      setData(fdata);
    };
    fetchData();
  }, [prjName]);
  return (
    <div style={{ padding: '10px', margin: '10px' }}>
      <Row gutter={[20, 15]} type="flex" justify="center">
        <Card style={{ width: '1420px', height: '270px' }}>
          <p style={{ fontSize: 18, margin: 20 }}>{prjName}</p>
          <div style={{ paddingTop: '0px', paddingBottom: '10px' }}>
            <Row gutter={[20, 15]} type="flex" justify="center">
              <Col><CTotal total={data.total} /></Col>
              <Col><COpenNumber opening={data.opening} /></Col>
              <Col><CAverageTime averageTime={data.averageTime} /></Col>
              <Col><CRetentionRate retentionRate={data.retentionRate} /></Col>
            </Row>
          </div>
        </Card>
      </Row>
    </div>
  );
};

export default COverallAnalyse;
