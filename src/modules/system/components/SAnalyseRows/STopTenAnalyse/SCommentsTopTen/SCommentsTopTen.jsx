import React from 'react';
import { Card } from 'antd';
import SCommentsTopTenBar from './SCommentsTopTenBar';

const SCommentsTopTen = props => {
 

  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      title="Comments数量Top10"
    >
      <SCommentsTopTenBar data={props.data}/>
    </Card>
  );
};

export default SCommentsTopTen;