import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, } from 'bizcharts';
import DataSet from '@antv/data-set';

const SClassifyAssigneesAnalyseBar = () => {
  const lablesData = [
    {
      name: 'Open',
      Proyang: 18,
      AyaseEUmi: 28,
      airoucat: 39,
      Shanxiaolin: 81,
    },
    {
      name: 'Close',
      Proyang: 80,
      AyaseEUmi: 55,
      airoucat: 55,
      Shanxiaolin: 36,
    },
  ];
  const lablesDataSet = new DataSet();
  const lablesDataValue = lablesDataSet.createView().source(lablesData);
  lablesDataValue.transform({
    type: 'fold',
    fields: ['Proyang', 'AyaseEUmi', 'airoucat', 'Shanxiaolin'],
    // 展开字段集
    key: '成员',
    // key字段
    value: 'Issue承担量', // value字段
  });

  return (
    <div className="barLables">
      <Chart height={405} data={lablesDataValue} forceFit>
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
        />
      </Chart>
    </div>
  );
};

export default SClassifyAssigneesAnalyseBar;
