import React, { useState,useEffect } from 'react';
import { Card } from 'antd';
import CCbarone from './CCbarone'
import CCpieone from './CCpieone'
import { get } from '../../../../../utils/fetch';
import { API_OPENINGISSUES } from '../../../../../utils/constants';
const CCcardone = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_OPENINGISSUES);
      setData(data);
    }
    fetchData();
  }, []);
  const [tabs, setState] = useState('bar');
  const tabList = [
    {
      key: 'bar',
      tab: '柱状图',
    },
    {
      key: 'pie',
      tab: '饼状图',
    }
  ];
  const contentList = {
    bar: <CCbarone data={data} />,
    pie: <CCpieone data={data} />,
  };

  return (
    <Card
      style={{ width: '1200px', height: '500px' }}
      title="issuesOpen平均时间分析"
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
export default CCcardone;
