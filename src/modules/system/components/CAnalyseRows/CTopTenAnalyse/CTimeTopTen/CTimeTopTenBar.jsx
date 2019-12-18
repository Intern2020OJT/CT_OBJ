/* eslint-disable react/prop-types */
import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label
} from 'bizcharts';
import DataSet from '@antv/data-set';


const CTimeTopTenBar = props => {
  const { data } = props;
  // 强制排序
  const sortData = data.sort((c, b) => { return (c.time > b.time) ? 1 : -1; });
  const ds = new DataSet();
  const dv = ds.createView().source(sortData);
  dv.source(data).transform({
    type: 'sort',
    callback(a, b) {
      // 排序依据，和原生js的排序callback一致
      return a.time - b.time > 0;
    }
  });

  const itemTpl = '<li data-index={index}>'
  + '<div style="float:left;font-size:14px;">{value}<div>'
  + '<div><div style="float:right">{otherMessage}<div><div>'
  + '</li>';

  return (
    <div>
      <Chart height={500} data={dv} forceFit>
        <Coord transpose />
        <Axis
          name="shortName"
          label={{
            offset: 12,
            textStyle: { fontSize: 15 }
          }}
        />
        <Axis name="time" label={{ textStyle: { fontSize: 15 } }} />
        <Axis name="htmlurl" />
        <Tooltip enterable="true" itemTpl={itemTpl} />
        <Geom
          type="interval"
          position="shortName*time"
          tooltip={['fullName*time*htmlurl', (fullName, time, htmlurl) => {
            return {
              // 此处baidu可替换为issues的url
              title: `<div style="font-size:15px;color:#3aa1ff">${fullName}</div>`,
              value: `对应时间: ${time}小时`,
              otherMessage: `<a href="${htmlurl}">详情</a>`
            };
          }]}
        >
          <Label offset={3} content={['time']} fontSize={15} />{''}
        </Geom>
      </Chart>
    </div>
  );
};


export default CTimeTopTenBar;
