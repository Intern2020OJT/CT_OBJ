import React from 'react';
import DataSet from '@antv/data-set';
import { Label, Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';

const CCpieoneright = props => {
  // eslint-disable-next-line react/prop-types
  const odata = props.data;
  const data = [];
  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < odata.length; i++) {
    // eslint-disable-next-line vars-on-top
    // eslint-disable-next-line react/prop-types
    const Odata = { item: odata[i].name, count: odata[i].time };
    data.push(Odata);
  } 
  const { DataView } = DataSet;
  const dv = new DataView();
  dv.source(data).transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const cols = {
    percent: {
      formatter: val => {
        // eslint-disable-next-line no-param-reassign
        val *= 100;
        // eslint-disable-next-line vars-on-top
        const Val = `${val.toFixed(2)}%`;// 将数据转化为两位小数
        return Val;
      }
    }
  };
  return (
    <div>
      <Chart
        height={400}
        white={1200}
        data={dv}
        scale={cols}
        padding={[0, 0, 0, 0]}
        forceFit
      >
        <Coord type="theta" radius={0.75} />
        <Axis name="percent" />
        <Legend
          position="right"
          offsetY={-window.innerHeight / 2 + 200}
          offsetX={-100}
        />
        <Tooltip
          showTitle={false}
          // eslint-disable-next-line max-len
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            'item*percent',
            (item, percent) => {
              // eslint-disable-next-line no-param-reassign
              percent = `${percent * 100}%`;
              return {
                name: item,
                value: percent
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: '#fff'
          }}
        >
          <Label
            content="percent"
            offset={-40}
            textStyle={{
              rotate: 0,
              textAlign: 'center',
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)'
            }}
          />
        </Geom>
      </Chart>
    </div>
  );
};
export default CCpieoneright;
