import React, { useState } from 'react';
import { Card } from 'antd';

import CCbaroneright from './CCbaroneright';

const CCcardoneright = () => {
  const data = [
    {
      name: 'AllIssues',
      project1: 1200,
      project2: 500
    },
    {
      name: 'OpeningIssues',
      project1: 1000,
      project2: 300
    },
  ];
  const [tabs, setState] = useState('bar');
  const tabList = [
    {
      key: 'bar',
      tab: '柱状图',
    } 
  ];
  const contentList = {
    bar: <CCbaroneright data={data} />,
  };
    
  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      title="多项目issuesOppen分析"
      tabList={tabList}
    >
      {contentList[tabs]}
    </Card>
  );
};
export default CCcardoneright;
