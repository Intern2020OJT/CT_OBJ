import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

import { get } from '../../../../../utils/fetch';

import { API_CARDONE } from '../../../../../utils/constants';

import CCbarone from './CCbarone';
import CCpieone from './CCpieone';

const CCcardone = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const fetchData = async () => {
      // eslint-disable-next-line react/prop-types
      const serverdata = props.data;
      // eslint-disable-next-line no-shadow
      const data = await get(API_CARDONE, { serverdata });
      // eslint-disable-next-line no-console
      console.log(props);
      setData(data);
    };
    fetchData();
  }, []);
  // eslint-disable-next-line no-console
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
      title="多项目issues对应时长分析"
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
