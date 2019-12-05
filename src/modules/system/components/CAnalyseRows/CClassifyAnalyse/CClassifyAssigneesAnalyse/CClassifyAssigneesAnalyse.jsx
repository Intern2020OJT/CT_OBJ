import React, { useState } from 'react';
import { Card } from 'antd';

import CClassifyAssigneesAnalyseBar from './CClassifyAssigneesAnalyseBar';
import CClassifyAssigneesAnalysePie from './CClassifyAssigneesAnalysePie';

const CClassifyAssigneesAnalyse = () => {
  const data = [
    {
      value: 18,
      type: 'Proyang',
      name: 'ProyangOpen',
    },
    {
      value: 80,
      type: 'Proyang',
      name: 'ProyangClose',
    },
    {
      value: 28,
      type: 'AyaseEUmi',
      name: 'AyaseEUmiOpen',
    },
    {
      value: 55,
      type: 'AyaseEUmi',
      name: 'AyaseEUmiClose',
    },
    {
      value: 39,
      type: 'airoucat',
      name: 'airoucatOpen',
    },
    {
      value: 55,
      type: 'airoucat',
      name: 'airoucatClose',
    },
    {
      value: 81,
      type: 'Shanxiaolin',
      name: 'ShanxiaolinOpen',
    },
    {
      value: 36,
      type: 'Shanxiaolin',
      name: 'ShanxiaolinClose',
    },
  ];


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
    bar: <CClassifyAssigneesAnalyseBar data={data} />,
    pie: <CClassifyAssigneesAnalysePie data={data} />,
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
