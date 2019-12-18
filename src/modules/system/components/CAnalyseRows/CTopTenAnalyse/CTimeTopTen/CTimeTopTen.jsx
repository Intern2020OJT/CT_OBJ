/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

import { API_GETTIMETOPTEN } from '../../../../../../utils/constants';

import { get } from '../../../../../../utils/fetch';

import CTimeTopTenBar from './CTimeTopTenBar';

const CTimeTopTen = props => {
  const [data, setData] = useState([]);
  const start = props.start;
  const end = props.end;
  const objName = props.objName;
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_GETTIMETOPTEN, { objName, start, end });
      setData(data);
    };
    fetchData();
  }, [end, objName, start]);
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
