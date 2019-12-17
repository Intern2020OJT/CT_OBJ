import React, { useState,useEffect } from 'react';
import { Card } from 'antd';
import CCbarone from './CCbarone'
import CCpieone from './CCpieone'
import { get } from '../../../../../utils/fetch';
import { API_CARDONE } from '../../../../../utils/constants';
const CCcardone = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_CARDONE);
      setData(data);
    }
    fetchData();
  }, []);
   console.log(data)
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
      title="多项目issues打开时长分析"
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
