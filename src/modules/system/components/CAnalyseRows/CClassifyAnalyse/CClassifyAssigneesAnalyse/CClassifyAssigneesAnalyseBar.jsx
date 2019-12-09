import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Label } from 'bizcharts';
import DataSet from '@antv/data-set';

const CClassifyAssigneesAnalyseBar = props => {
  const data = props.data;
  var ldata = [];
  var odata = {};
  var cdata = {};
  odata.name = 'Open';
  cdata.name = 'Close';
  for (var i = 0; i < data.length; i += 2) {
    odata[data[i].type] = data[i].value;
    cdata[data[i].type] = data[i + 1].value;
  }
  ldata.push(odata);
  ldata.push(cdata);
  var fields = [];
  for (var key in ldata[0]) {
    if (key != 'name') fields.push(key);
  }
  const ds = new DataSet();
  const dv = ds.createView().source(ldata);
  dv.transform({
    type: 'fold',
    fields: fields,
    // 展开字段集
    key: 'member',
    // key字段
    value: 'assigness', // value字段
  });

  return (
    <div className="barLabels">
      <Chart height={405} data={dv} forceFit>
        <Legend position="bottom" dy={-20} />
        <Axis name="member" label={{textStyle:{fontSize:15}}}/>
        <Axis name="assigness" label={{textStyle:{fontSize:15}}}/>
        <Tooltip />
        <Geom
          type="intervalStack"
          position="member*assigness"
          color="name"
          style={{
            stroke: '#fff',
            lineWidth: 1,
          }}
        >
          <Label
            offset={0}
            position="middle"
            content={['assigness']}
            textStyle={{
              fill:'white',
              fontSize:'15'
            }}
            formatter={(text, item, index) => {
              // text 为每条记录 x 属性的值
              // item 为映射后的每条数据记录，是一个对象，可以从里面获取你想要的数据信息
              // index 为每条记录的索引
              if(text!='0')return text;
              else return undefined;
            }} />{''}
        </Geom>
      </Chart>
    </div>
  );
};

export default CClassifyAssigneesAnalyseBar;
