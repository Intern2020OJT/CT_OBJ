import React from 'react';
import { Card } from 'antd';

import CCbartwo from './CCbartwo';
 
const CCcardtwo = (props) => {
  const data = props;
  const tabList = [
    {
      key: 'bar',
      tab: '柱状图',
    }
  ];
  return (
    <Card
      style={{ width: '1200px', height: '500px' }}
      title="多项目issues数量分析"
      tabList={tabList}
    >
      <CCbartwo data={data} />
    </Card>
  );
};
export default CCcardtwo;
