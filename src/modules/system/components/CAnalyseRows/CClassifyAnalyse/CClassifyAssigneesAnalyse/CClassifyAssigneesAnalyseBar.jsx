import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend,Label } from 'bizcharts';
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
    cdata[data[i].type] = data[i+1].value;
  }
  ldata.push(odata);
  ldata.push(cdata);
  var fields = [];
  for (var key in ldata[0]){
    if(key!='name')fields.push(key);
  }
  const ds = new DataSet();
  const dv = ds.createView().source(ldata);
  dv.transform({
    type: 'fold',
    fields: fields,
    // 展开字段集
    key: '成员',
    // key字段
    value: 'Issue承担量', // value字段
  });

  return (
    <div className="barLabels">
      <Chart height={405} data={dv} forceFit>
        <Legend position="top" dy={-20} />
        <Axis name="成员" />
        <Axis name="Issue承担量" />
        <Tooltip />
        <Geom
          type="intervalStack"
          position="成员*Issue承担量"
          color="name"
          style={{
            stroke: '#fff',
            lineWidth: 1,
          }}
        >
           <Label style={{top:30}} content={['Issue承担量']} />{' '}
        </Geom>
      </Chart>
    </div>
  );
};

export default CClassifyAssigneesAnalyseBar;
