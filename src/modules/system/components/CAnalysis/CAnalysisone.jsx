import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { Col } from 'antd';
import DataSet from '@antv/data-set';

const CAnalysisone = () => {
  const dataq = [
    {
      name: 'project1',
      AllIssues: 0.6,
      OpeningIssues: 0.3
    },
    {
      name: 'project2',
      AllIssues: 0.2,
      OpeningIssues: 0.6
    },
    {
      name: 'project3',
      AllIssues: 0.2,
      OpeningIssues: 0.1
    }
  ];
  const ds = new DataSet();
  const dv = ds.createView().source(dataq);
  dv.transform({
    type: 'fold',
    fields: ['AllIssues', 'OpeningIssues'],
    // 展开字段集
    key: '要分析的issues类别',
    // key字段
    value: '所占百分比' // value字段
  });
  return (    
    <Col span={12}>
      <div className="body">
        <p className="p-font">多项目issuesOppen分析</p>
        <Chart height={540} width={500} data={dv} forceFit>
          {<Legend position="top" dy={-20} />/* 控制颜色解释位置.下面写法颜色解释位于下方<Legend/> */}
          <Axis name="要分析的issues类别" title />
          <Axis name="所占百分比" title />
          <Tooltip />
          <Geom
            type="intervalStack"
            position="要分析的issues类别*所占百分比"
            color="name"
          />
        </Chart>
      </div>
    </Col>      
  );
};
export default CAnalysisone;
