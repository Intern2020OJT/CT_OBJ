import { get } from '../../../../../utils/fetch';
import React, { useState,useEffect } from 'react';
import {Card} from 'antd';
import CCpolythree from './CCpolythree'
import { API_CARDTHREE } from '../../../../../utils/constants';
const CCcardthree = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_CARDTHREE)
      setData(data);
    }
    fetchData();
  }, []);
      const [tabs, setState] = useState('bar');
      const tabList = [
        {
          key: 'bar',
          tab: '折线图',
        } 
      ];
      const contentList = {
        bar: <CCpolythree data={data}/>,
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
