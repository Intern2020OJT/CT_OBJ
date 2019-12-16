import React, { useState, useEffect } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Label } from 'bizcharts';
 
const CCbaroneleft = props => {
  const { data } = props;

  // 定义度量
  const cols = {
    sold: { alias: 'issueOpen平均时间(/h)' },
    genre: { alias: '项目名称' }
  };

  return (

    <Chart width={400} height={400} data={data} forceFit scale={cols}>
      <Legend position="bottom" dy={-20} />
      <Tooltip />
      <Axis
        name="sold"
        title={{ textStyle: { fontSize: '12',
          textAlign: 'center',
          fill: '#111',
        } }}
      />
      <Axis
        name="genre"
        title={{ textStyle: { fontSize: '12',
          textAlign: 'center',
          fill: '#111',
        } }}
      />
      <Geom
        color="genre"
        type="interval"
        position="genre*sold"
        tooltip={['genre*sold', (genre, sold) => {
          return {
            // 自定义 tooltip 上显示的 title 显示内容等。
            name: genre,
            title: genre,
            value: sold 
          };
        }]}
      >
        <Label content={['sold']} />{' '}
      </Geom>
    </Chart>

  );
};
export default CCbaroneleft;
