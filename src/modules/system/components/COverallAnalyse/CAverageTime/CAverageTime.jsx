/* eslint-disable react/prop-types */
import React from 'react';
import { Statistic, Card } from 'antd';

const CAverageTime = props => {
  const { averageTime } = props;
  return (
    <Card style={{ border: '1px solid #D9D9D9' }}>
      <p style={{ fontSize: 18, margin: 20 }}>Issue Close 平均对应时间</p>
      <Statistic  
        style={{ width: '283px', height: '80px' }}
        valueStyle={{ textAlign: 'center', color: 'green', fontSize: 40 }}     
        value={averageTime}
        precision={2}
        suffix={<span style={{ fontSize: 35 }}> h</span>}
      />
    </Card>
  );
};

export default CAverageTime;
