import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import { Row, Col } from 'antd';

const SHome = () => {
  // 数据源
  const data = [
    { genre: 'Sports', sold: 275, income: 2300 },
    { genre: 'Strategy', sold: 115, income: 667 },
    { genre: 'Action', sold: 120, income: 982 },
    { genre: 'Shooter', sold: 350, income: 5271 },
    { genre: 'Other', sold: 150, income: 3710 },
  ];

  // 定义度量
  const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' },
  };
  const data2 = [
    {
      name: 'London',
      'Jan.': 18.9,
      'Feb.': 28.8,
      'Mar.': 39.3,
      'Apr.': 81.4,
      May: 47,
      'Jun.': 20.3,
      'Jul.': 24,
      'Aug.': 35.6,
    },
    {
      name: 'Berlin',
      'Jan.': 12.4,
      'Feb.': 23.2,
      'Mar.': 34.5,
      'Apr.': 99.7,
      May: 52.6,
      'Jun.': 35.5,
      'Jul.': 37.4,
      'Aug.': 42.4,
    },
  ];
  const ds = new DataSet();
  const dv = ds.createView().source(data2);
  dv.transform({
    type: 'fold',
    fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
    // 展开字段集
    key: '月份',
    // key字段
    value: '月均降雨量', // value字段
  });

  return (
    <div className="home">
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
        <Col span={8}>
          <div className="matchtest">
            <h1>Home</h1>
            <Chart height={400} data={data} scale={cols}>
              <Axis name="genre" title />
              <Axis name="sold" title />
              <Legend position="top" dy={-20} />
              <Tooltip />
              <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
          </div>
        </Col>
        <Col span={8}>
          <div className="matchLables">
            <h1>Home</h1>
            <Chart height={400} data={dv} forceFit>
              <Legend position="top" dy={-20} />
              <Axis name="月份" />
              <Axis name="月均降雨量" />
              <Tooltip />
              <Geom
                type="intervalStack"
                position="月份*月均降雨量"
                color="name"
                style={{
                  stroke: '#fff',
                  lineWidth: 1,
                }}
              />
            </Chart>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SHome;
