/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

import { API_GETTIMETOPTEN } from '../../../../../../utils/constants';

import { get } from '../../../../../../utils/fetch';

import CTimeTopTenBar from './CTimeTopTenBar';

const CTimeTopTen = () => {
  const [data, setData] = useState([]);
  const start = '2018';
  const end = '2019';
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_GETTIMETOPTEN, { start, end });
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <Card
      style={{ width: '600px', height: '500px' }}
      // title="平均对应时间Top10 (小时)"
    ><p style={{ fontSize: 18, margin: 20 }}>平均对应时间Top10 (小时)</p>
      <CTimeTopTenBar data={data} />
    </Card>
  );
};

export default CTimeTopTen;
