import React from 'react';
import { Card } from 'antd';
import CCommentsTopTenBar from './CCommentsTopTenBar';

const CCommentsTopTen = props => {
 

  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      title="Comments数量Top10"
    >
      <CCommentsTopTenBar data={props.data}/>
    </Card>
  );
};

export default CCommentsTopTen;