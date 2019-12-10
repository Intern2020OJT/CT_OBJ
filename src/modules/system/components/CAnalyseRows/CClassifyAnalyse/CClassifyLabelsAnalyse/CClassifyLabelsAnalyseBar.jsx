import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Label } from 'bizcharts';
import DataSet from '@antv/data-set';

const CClassifyLablesAnalyseBar = props => {
  const { data } = props;
  const ldata = [];
  const odata = {};
  const cdata = {};
  odata.name = 'Open';
  cdata.name = 'Close';
  for (let i = 0; i < data.length; i += 2) {
    odata[data[i].type] = data[i].value;
    cdata[data[i].type] = data[i + 1].value;
  }
  ldata.push(odata);
  ldata.push(cdata);
  const fields = [];
  for (const key in ldata[0]) {
    if (key != 'name')fields.push(key);
  }
  const lablesDataSet = new DataSet();
  const lablesDataValue = lablesDataSet.createView().source(ldata);
  lablesDataValue.transform({
    type: 'fold',
    fields: ['Bug', 'Todo', 'Doing', 'Done', 'Problem'],
    // 展开字段集
    key: 'Lables',
    // key字段
    value: 'count', // value字段
  });

  return (
    <div className="barLabels">
      <Chart height={405} data={lablesDataValue} forceFit>
        <Legend position="bottom" dy={-20} />
        <Axis name="Lables" label={{ textStyle: { fontSize: 15 } }} />
        <Axis name="count" label={{ textStyle: { fontSize: 15 } }} />
        <Tooltip />
        <Geom
          type="intervalStack"
          position="Lables*count"
          color="name"
          style={{
            stroke: '#fff',
            lineWidth: 1
          }}
        >
          <Label
            offset={0}
            position="middle"
            content={['count']}
            textStyle={{
              fill: 'white',
              fontSize: '15'
            }}
            formatter={(text, item, index) => {
              // text 为每条记录 x 属性的值
              // item 为映射后的每条数据记录，是一个对象，可以从里面获取你想要的数据信息
              // index 为每条记录的索引
              if (text != '0') return text;
              return undefined;
            }}
          />{''}
        </Geom>
      </Chart>
    </div>
  );
};

export default CClassifyLablesAnalyseBar;
