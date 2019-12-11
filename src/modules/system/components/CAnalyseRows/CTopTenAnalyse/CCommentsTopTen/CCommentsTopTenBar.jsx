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

const CCommentsTopTenBar = props => {
  const { data } = props;
  // 强制排序
  const sortData = data.sort((c, b) => { return (c.comments > b.comments) ? 1 : -1; });
  const ds = new DataSet();
  const dv = ds.createView().source(sortData);
  dv.source(data).transform({
    type: 'sort',
    callback(a, b) {
      // 排序依据，和原生js的排序callback一致
      return a.comments - b.comments > 0;
    }
  });

  const itemTpl= '<li data-index={index}>'
  + '<div style="float:left;font-size:14px;">{value}<div>'
  + '<div><div style="float:right">{otherMessage}<div><div>'
  + '</li>'

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
        <Axis name="comments" label={{ textStyle: { fontSize: 15 } }}/>
        <Tooltip enterable="true" itemTpl={itemTpl} />
        <Geom
          type="interval"
          position="shortName*comments"
          tooltip={['fullName*comments', (fullName, comments) => {
            return {
              // 自定义 tooltip 上显示的 title 显示内容等。
              title:`<div style="font-size:15px;color:#3aa1ff">${fullName}</div>`,
              value:`Comments数量: ${comments}个`,
              otherMessage:`<a href="https://www.baidu.com>">详情</a>`
            };
          }]}
        >
          <Label offset={3} content={['comments']} fontSize={15}/>{''}
        </Geom>
      </Chart>
    </div>
  );
};


export default CCommentsTopTenBar;
