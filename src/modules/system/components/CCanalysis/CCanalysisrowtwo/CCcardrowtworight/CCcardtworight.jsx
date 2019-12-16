import React, { useState } from 'react';
import { Card } from 'antd';

import CCanalysisbar from './CCanalysisbar';
import CCanalysispie from './CCanalysispie';

const CCanalysiscard = () => {
  const [tabs, setState] = useState('bar');
  const tabList = [
    {
      key: 'bar',
      tab: '柱状图',
    },
    {
      key: 'pie',
      tab: '饼状图',
    },
  ];
  const contentList = {
    bar: <CCanalysisbar />,
    pie: <CCanalysispie />,
  };
    
  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      title="多项目issuesOppen分析"
      tabList={tabList}
      activeTabKey={tabs}
      onTabChange={key => {
        setState(key);
      }}
    >
      {contentList[tabs]}
    </Card>
  );
};
export default CCanalysiscard;
