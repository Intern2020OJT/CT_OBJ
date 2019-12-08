import React, { useState } from 'react';
import { Card } from 'antd';

import CClassifyLablesAnalyseBar from './CClassifyLabelsAnalyseBar';
import CClassifyLablesAnalysePie from './CClassifyLabelsAnalysePie';

const CClassifyLablesAnalyse = () => {
  const [tabs, setState] = useState('bar');
  
  const data = [
    {
      value: 18,
      type: 'Bug',
      name: 'BugOpen',
    },
    {
      value: 30,
      type: 'Bug',
      name: 'BugClose',
    },
    {
      value: 28,
      type: 'Todo',
      name: 'TodoOpen',
    },
    {
      value: 28,
      type: 'Todo',
      name: 'TodoClose',
    },
    {
      value: 39,
      type: 'Doing',
      name: 'DoingOpen',
    },
    {
      value: 39,
      type: 'Doing',
      name: 'DoingClose',
    },
    {
      value: 0,
      type: 'Done',
      name: 'DoneOpen',
    },
    {
      value: 50,
      type: 'Done',
      name: 'DoneClose',
    },
    {
      value: 20,
      type: 'Problem',
      name: 'ProblemOpen',
    },
    {
      value: 20,
      type: 'Problem',
      name: 'ProblemClose',
    },
  ];

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
    bar: <CClassifyLablesAnalyseBar data={data}/>,
    pie: <CClassifyLablesAnalysePie data={data}/>,
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
