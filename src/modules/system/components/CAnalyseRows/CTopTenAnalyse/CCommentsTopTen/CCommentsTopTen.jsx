/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';


import { API_GETCOMMENTSTOPTEN } from '../../../../../../utils/constants';

import { get } from '../../../../../../utils/fetch';

import CCommentsTopTenBar from './CCommentsTopTenBar';

const CCommentsTopTen = props => {
  const [data, setData] = useState([]);
  const start = props.start;
  const end = props.end;
  const objName = props.objName;
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_GETCOMMENTSTOPTEN, { objName, start, end });
      setData(data);
    };
    fetchData();
  }, [end, objName, start]);
  return (
    <Card
      style={{ width: '700px', height: '530px' }}
    // title="Comments数量Top10 (个)"
    ><p style={{ fontSize: 18, margin: 20 }}>Comments数量Top10 (个)</p>
      <CCommentsTopTenBar data={data} />
    </Card>
  );
};

export default CCommentsTopTen;
