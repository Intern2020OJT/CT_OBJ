import React, { useState } from 'react';
import { Card } from 'antd';

import CClassifyAssigneesAnalyseBar from './CClassifyAssigneesAnalyseBar';
import CClassifyAssigneesAnalysePie from './CClassifyAssigneesAnalysePie';

const CClassifyAssigneesAnalyse = () => {
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
    bar: <CClassifyAssigneesAnalyseBar />,
    pie: <CClassifyAssigneesAnalysePie />,
  };

  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      title="担当者分析"
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

export default CClassifyAssigneesAnalyse;
