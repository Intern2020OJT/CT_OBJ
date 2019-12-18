/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';


import { API_GETEFFICIENCY } from '../../../../../utils/constants';
import { get } from '../../../../../utils/fetch';

import CEfficiencyAnalyseCurve from './CEfficiencyAnalyseCurve';

const CEfficiencyAnalyse = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_GETEFFICIENCY);
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[10, 15]} type="flex" justify="center">
        <Col>
          <Card
            style={{ width: '1220px', height: '500px' }}
          ><p style={{ fontSize: 18, margin: 20 }}>平均对应时间分析</p>
            <CEfficiencyAnalyseCurve data={data} />
          </Card>

        </Col>
      </Row>
    </div>
  );
};

export default CEfficiencyAnalyse;
