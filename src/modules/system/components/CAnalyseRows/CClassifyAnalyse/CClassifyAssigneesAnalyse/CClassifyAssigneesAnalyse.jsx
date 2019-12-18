/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

import { API_GETASSIGNEES } from '../../../../../../utils/constants';
import { get } from '../../../../../../utils/fetch';

import CClassifyAssigneesAnalyseBar from './CClassifyAssigneesAnalyseBar';
import CClassifyAssigneesAnalysePie from './CClassifyAssigneesAnalysePie';


const CClassifyAssigneesAnalyse = props => {
  const [tabs, setState] = useState('bar');
  
  const [data, setData] = useState([]);
  const start = props.start;
  const end = props.end;
  const objName = props.objName;
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_GETASSIGNEES, { objName, start, end });
      setData(data);
    };
    fetchData();
  }, [end, objName, start]);

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
      // title="担当者分析"
      tabList={tabList}
      activeTabKey={tabs}
      onTabChange={key => {
        setState(key);
      }}
    ><p style={{ fontSize: 18, margin: 20 }}>担当者分析</p>
      {contentList[tabs]}
    </Card>
  );
};

export default CClassifyAssigneesAnalyse;
