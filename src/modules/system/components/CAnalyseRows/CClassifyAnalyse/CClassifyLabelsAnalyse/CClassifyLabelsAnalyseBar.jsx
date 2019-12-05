import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, } from 'bizcharts';
import DataSet from '@antv/data-set';

const CClassifyLablesAnalyseBar = props => {
  const data = props.data;
  var ldata = [];
  var odata = {};
  var cdata = {};
  odata.name = 'Open';
  cdata.name = 'Close';
  for (var i = 0; i < data.length; i += 2) {
    odata[data[i].type] = data[i].value;
    cdata[data[i].type] = data[i+1].value;
  }
  ldata.push(odata);
  ldata.push(cdata);
  var fields = [];
  for (var key in ldata[0]){
    if(key!='name')fields.push(key);
  }
  const lablesDataSet = new DataSet();
  const lablesDataValue = lablesDataSet.createView().source(ldata);
  lablesDataValue.transform({
    type: 'fold',
    fields: ['Bug', 'Todo', 'Doing', 'Done', 'Problem'],
    // 展开字段集
    key: 'Lables',
    // key字段
    value: '数量', // value字段
  });

  return (
    <div className="barLabels">
      <Chart height={405} data={lablesDataValue} forceFit>
        <Legend position="top" dy={-20} />
        <Axis name="Lables" />
        <Axis name="数量" />
        <Tooltip />
        <Geom
          type="intervalStack"
          position="Lables*数量"
          color="name"
          style={{
            stroke: '#fff',
            lineWidth: 1,
          }}
        />
      </Chart>
    </div>
  );
};

export default CClassifyLablesAnalyseBar;
