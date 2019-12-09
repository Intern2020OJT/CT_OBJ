import React from 'react';
import { Card } from 'antd';
import CTimeTopTenBar from './CTimeTopTenBar';

const CTimeTopTen = props => {
  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      title="平均对应时间Top10 (小时)"
    >
      <CTimeTopTenBar data={props.data}/>
    </Card>
  );
};

export default CTimeTopTen;
