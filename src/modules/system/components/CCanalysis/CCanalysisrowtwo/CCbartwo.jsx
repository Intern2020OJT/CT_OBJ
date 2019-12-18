 
import React, { useState, useEffect } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Label } from 'bizcharts';
import DataSet from '@antv/data-set';

import { get } from '../../../../../utils/fetch';
import { API_CARDTWO } from '../../../../../utils/constants';

const CCbartwo = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const fetchData = (async () => {
      // eslint-disable-next-line no-shadow
      const res = [{ name: 'CT_OBJ' }, { name: 'ISE_OBJ' }, { name: 'SMD_OBJ' }];
      // eslint-disable-next-line no-shadow
      const data = await get(API_CARDTWO, { res });
      setData(data);
    });
    fetchData();
  }, []);
  // eslint-disable-next-line no-console
  console.log(data); 
  const fields = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in data[0]) {
    if (key !== 'name') fields.push(key);
  }
  // eslint-disable-next-line no-console
   
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: fields,
    // 展开字段集
    key: '项目',
    // key字段
    value: '数量' // value字段
  });
   
  return (
    <Chart height={400} width={1200} data={dv} forceFit>
      {<Legend position="bottom" dy={-20} />/* 控制颜色解释位置.下面写法颜色解释位于下方<Legend/> */}
      <Axis
        name="项目"
        title={{
          textStyle: {
            fontSize: '12',
            textAlign: 'center',
            fill: '#111', // 控制横纵坐标标题颜色深浅
          }
        }}
      />
      <Axis
        name="数量"
        title={{
          textStyle: {
            fontSize: '12',
            textAlign: 'center',
            fill: '#111',
          }
        }}
      />
      <Tooltip />
      <Geom
        type="intervalStack"
        position="项目*数量"
        color="name"
      >
        <Label
          position="middle"
          content={['数量']}
          offset={0} // 设置坐标轴文本 lamiddlebel 距离坐标轴线的距离
          textStyle={{
            textAlign: 'center', // 文本对齐center方向，可取值为： start middle end
            fill: '#404040', // 文本的颜色
            fontSize: '14', // 文本大小
            fontWeight: 'bold', // 文本粗细
            textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
          }}
        />
      </Geom>
    </Chart>
  );
};
export default CCbartwo;
