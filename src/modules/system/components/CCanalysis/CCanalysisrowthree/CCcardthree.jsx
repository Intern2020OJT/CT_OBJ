import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

import { get } from '../../../../../utils/fetch';

import { API_CARDTHREE } from '../../../../../utils/constants';

import CCpolythree from './CCpolythree';


const CCcardthree = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line react/prop-types
      const serverdata = props.data;
      // eslint-disable-next-line no-shadow
      const data = await get(API_CARDTHREE, { serverdata });
      setData(data);
    };
    fetchData();
  }, []);
  // eslint-disable-next-line no-unused-vars
  const [tabs, setState] = useState('bar');
  const tabList = [
    {
      key: 'bar',
      tab: '折线图',
    } 
  ];
  const contentList = {
    bar: <CCpolythree data={data} />,
  };
    
  return (
    <Card
      style={{ width: '1200px', height: '500px' }}
      title="多项目issues参与人员分析"
      tabList={tabList}
    >
      {contentList[tabs]}
    </Card>
  );
};
export default CCcardthree;
