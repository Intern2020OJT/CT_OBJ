import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, } from 'bizcharts';
import DataSet from '@antv/data-set';

const SClassifyLablesAnalyseBar = () => {
  const lablesData = [
    {
      name: 'Open',
      Bug: 18,
      Todo: 28,
      Doing: 39,
      Done: 0,
      Problem: 20,
    },
    {
      name: 'Close',
      Bug: 30,
      Todo: 28,
      Doing: 39,
      Done: 50,
      Problem: 20,
    },
  ];
  const lablesDataSet = new DataSet();
  const lablesDataValue = lablesDataSet.createView().source(lablesData);
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

export default SClassifyLablesAnalyseBar;
