import React,{useState} from 'react';
import DataSet from '@antv/data-set';
import {Label,Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';
const CCpieoneright = props => {
  const odata = props.data;
  const data = [];
  for (let i=0;i<odata.length;i++)
  {
    var Odata={"item":odata[i].genre,"count":odata[i].sold};
	  data.push(Odata);
  } 
  const { DataView } = DataSet;
  const dv = new DataView();
  dv.source(data).transform({
    type: "percent",
    field: "count",
    dimension: "item",
    as: "percent"
  });
  const cols = {
    percent: {
      formatter: val => {
        val = val * 100;
        var Val = val.toFixed(2)+"%"//将数据转化为两位小数
        return Val;
      }
    }
  };
  return (
    <div>
      <Chart
        height={400}
        white={400}
        data={dv}
        scale={cols}
        padding={[80, 100, 80, 80]}
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
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            "item*percent",
            (item, percent) => {
              percent = percent * 100 + "%";
              return {
                name: item,
                value: percent
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: "#fff"
          }}
        >
          <Label
            content="percent"
            offset={-40}
            textStyle={{
              rotate: 0,
              textAlign: "center",
              shadowBlur: 2,
              shadowColor: "rgba(0, 0, 0, .45)"
            }}
          />
        </Geom>
      </Chart>
    </div>
  );
}
export default CCpieoneright;
