/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';


import { API_GETCOMMENTSTOPTEN } from '../../../../../../utils/constants';

import { get } from '../../../../../../utils/fetch';

import CCommentsTopTenBar from './CCommentsTopTenBar';

const CCommentsTopTen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_GETCOMMENTSTOPTEN);
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <Card
      style={{ width: '600px', height: '500px' }}
    // title="Comments数量Top10 (个)"
    ><p style={{ fontSize: 18, margin: 20 }}>Comments数量Top10 (个)</p>
      <CCommentsTopTenBar data={data} />
    </Card>
  );
};

export default CCommentsTopTen;
