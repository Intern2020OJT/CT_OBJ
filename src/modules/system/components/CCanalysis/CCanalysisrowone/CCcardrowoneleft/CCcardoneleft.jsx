import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

import { get } from '../../../../../../utils/fetch';

import { API_OPENINGISSUES } from '../../../../../../utils/constants';

import CCbaroneleft from './CCbaroneleft';
import CCpieoneleft from './CCpieoneleft';

const CCcardoneleft = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_OPENINGISSUES);
      setData(data);
    };
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
    bar: <CCbaroneleft data={data} />,
    pie: <CCpieoneleft data={data} />,
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
export default CCcardoneleft;
