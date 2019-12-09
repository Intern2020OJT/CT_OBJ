import React from 'react';
import { Card } from 'antd';

import CCommentsTopTenBar from './CCommentsTopTenBar';

const CCommentsTopTen = props => {
  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      // title="Comments数量Top10 (个)"
    ><p style={{ fontSize: 18, margin: 20 }}>Comments数量Top10 (个)</p>
      <CCommentsTopTenBar data={props.data} />
    </Card>
  );
};

export default CCommentsTopTen;
