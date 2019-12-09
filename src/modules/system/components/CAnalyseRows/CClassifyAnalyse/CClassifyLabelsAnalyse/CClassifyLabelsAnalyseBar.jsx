import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Label } from 'bizcharts';
import DataSet from '@antv/data-set';

const CClassifyLablesAnalyseBar = props => {
  const { data } = props;
  const ldata = [];
  const odata = {};
  const cdata = {};
  const addData ={};
  odata.name = 'Open';
  cdata.name = 'Close';
  addData.name = 'All';
  for (let i = 0; i < data.length; i += 2) {
    odata[data[i].type] = data[i].value;
    cdata[data[i].type] = data[i + 1].value;
    addData[data[i].type] = data[i].value + data[i + 1].value;
  }
  ldata.push(addData);
  ldata.push(odata);
  ldata.push(cdata);
  
  const fields = [];
  for (const key in ldata[0]) {
    if (key != 'name') fields.push(key);
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
  }).transform({
    type: "map",
    callback: obj => {
      console.log(obj);
      const key = obj.name;
      let type;
      if (
        key === "All"
      ) {
        type = "a";
      }  else {
        type = "b";
      }
      obj.type = type;
      return obj;
    }
  });

  return (
    <div className="barLabels">
      <Chart height={405} data={lablesDataValue} forceFit>
        <Legend position="bottom" dy={-20} marker="hollowDiamond" textStyle={{fontSize:'15'}}/>
        <Axis name="Lables" label={{ textStyle: { fontSize: 15 } }} />
        <Axis name="count" label={{ textStyle: { fontSize: 15 } }} />
        <Tooltip />
        <Geom
          type="interval"
          position="Lables*count"
          color="name"
          style={{
            stroke: '#fff',
            lineWidth: 1,
          }}
          adjust={[
            {
              type: "dodge",
              dodgeBy: "type",
              // 按照 type 字段进行分组
              marginRatio: 0 // 分组中各个柱子之间不留空隙
            },
            {
              type: "stack"
            }
          ]}
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
