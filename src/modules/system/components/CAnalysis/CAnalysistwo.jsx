import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { Col } from 'antd';


const CAnalysistwo = () => {
  // 数据源
  const data = [
    { genre: 'Sports', sold: 10, income: 2300 },
    { genre: 'Strategy', sold: 8, income: 667 },
    { genre: 'Action', sold: 9, income: 982 },
    { genre: 'Shooter', sold: 6, income: 5271 },
    { genre: 'Other', sold: 7, income: 3710 }
  ];

  // 定义度量
  const cols = {
    sold: { alias: 'issueOpen平均时间(/h)' },
    genre: { alias: '项目名称' }
  };

  return (
    <Col span={12}>
      <div className="body">
        <p className="p-font">多项目issues平均oppen时间分析</p>
        <div className="padding-right">
          <Chart width={500} height={540} data={data} forceFit scale={cols}>
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Axis name="sold" title />
            <Axis name="genre" title />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
        </div>
      </div>
    </Col>
  );
};
export default CAnalysistwo;
