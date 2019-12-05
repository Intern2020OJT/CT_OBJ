import React from 'react';
import { Card } from 'antd';
import STimeTopTenBar from './STimeTopTenBar';

const STimeTopTen = props => {
  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      title="平均对应时间Top10"
    >
      <STimeTopTenBar data={props.data}/>
    </Card>
  );
};

export default STimeTopTen;
