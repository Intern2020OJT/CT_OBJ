/* eslint-disable react/prop-types */
import React from 'react';
import { Statistic, Card } from 'antd';

const CTotal = props => {
  const { total } = props;
  return (
    <Card style={{ border: '1px solid #D9D9D9' }}>
      <p style={{ fontSize: 18, margin: 20 }}>Issues 总数</p>
      <Statistic  
        style={{ width: '283px', height: '80px' }}
        valueStyle={{ textAlign: 'center', color: 'green', fontSize: 40 }}     
        value={total}
      />
    </Card>
  );
};

export default CTotal;
