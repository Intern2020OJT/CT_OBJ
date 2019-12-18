import React, { useState,useEffect } from 'react';
import { Card } from 'antd';
import CCbartwo from './CCbartwo'
import { get } from '../../../../../utils/fetch';
import { API_CARDTWO } from '../../../../../utils/constants';
const CCcardtwo = () => {
  console.log('1')
  const tabList = [
    {
      key: 'bar',
      tab: '柱状图',
    }
  ];
  return (
    <Card
      style={{ width: '1200px', height: '500px' }}
      title="多项目issues数量分析"
      tabList={tabList}
    >
      <CCbartwo/>
    </Card>
  );
};
export default CCcardtwo;
