/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { Card, DatePicker } from 'antd';

const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;

const CTimeSelecter = (props) => {
  function onChange(date, dateString) {
    props.func(dateString);
  }
  return (
    <Card style={{ width: '1220px', height: '150px' }}>
      <p style={{ fontSize: 18, margin: 20 }}>期间检索</p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
        <p style={{ fontSize: 20 }}>期间：</p>
        <RangePicker 
          onChange={onChange} 
          placeholder={['开始时间', '结束时间']} 
          defaultValue={[moment('2019/01/01', dateFormat), moment('2020/01/01', dateFormat)]}
        />
      </div>
    </Card>
  );
};

export default CTimeSelecter;
