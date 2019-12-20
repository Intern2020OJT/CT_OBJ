import React from 'react';
import { Chart, Geom, Axis, Tooltip, Label, Legend } from 'bizcharts';

const CCpolythree = props => {  
  // eslint-disable-next-line react/prop-types
  const odata = props.data;
  const data = [];
  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < odata.length; i++) {
    // eslint-disable-next-line react/prop-types
    const data1 = { project: odata[i].name, people: odata[i].people };
    data.push(data1);
  }
  const cols = {
    people: {
      alias: '参与人员',
    },
    project: {
      alias: '项目',
    }
  };
  return (
    <div>
      <Chart width={1200} height={400} data={data} forceFit scale={cols}>
        <Legend position="bottom" dy={-20} />
        <Tooltip />
        <Axis
          name="people"
          title={{ textStyle: { fontSize: '12',
            textAlign: 'center',
            fill: '#111',
          } }}
        />
        <Axis
          name="project"
          title={{ textStyle: { fontSize: '12',
            textAlign: 'center',
            fill: '#111',
          } }}
        />
        <Geom
          color="project"
          type="interval"
          position="project*people"
        >
          <Label
            position="middle"
            content={['people']}
            offset={0} // 设置坐标轴文本 lamiddlebel 距离坐标轴线的距离
            textStyle={{
              textAlign: 'center', // 文本对齐center方向，可取值为： start middle end
              fill: '#404040', // 文本的颜色
              fontSize: '18', // 文本大小
              textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
            }}
          />
        </Geom>
      </Chart>
    </div>
  );
};
export default CCpolythree;
