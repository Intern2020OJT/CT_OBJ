import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Label } from 'bizcharts';
 
const CCbarone = props => {
  // eslint-disable-next-line react/prop-types
  const odata = props.data;
  const data = [];
  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < odata.length; i++) {
    // eslint-disable-next-line vars-on-top
    // eslint-disable-next-line react/prop-types
    const Odata = { genre: odata[i].name, sold: odata[i].time };
    data.push(Odata);
  } 
 
  // 定义度量
  const cols = {
    sold: { alias: '平均时间(/h)' },
    genre: { alias: '项目名称' }
  };

  return (

    <Chart width={1200} height={400} data={data} forceFit scale={cols}>
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
export default CCbarone;
