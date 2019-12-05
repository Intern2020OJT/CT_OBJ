import React, { useState } from 'react';
import { Card } from 'antd';

import CClassifyLablesAnalyseBar from './CClassifyLabelsAnalyseBar';
import CClassifyLablesAnalysePie from './CClassifyLabelsAnalysePie';

const CClassifyLablesAnalyse = () => {
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
    bar: <CClassifyLablesAnalyseBar />,
    pie: <CClassifyLablesAnalysePie />,
  };

  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      title="Lables分析"
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

export default CClassifyLablesAnalyse;
