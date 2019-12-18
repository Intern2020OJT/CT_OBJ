/* eslint-disable react/prop-types */
import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend
} from 'bizcharts';

const CEfficiencyAnalyseCurve = props => {
  const { data } = props;
  const cols = {
    month: {
      range: [0, 1]
    }
  };
  return (
    <div className="curveEfficiency">
      <Chart height={400} data={data} scale={cols} forceFit>
        <Legend />
        <Axis name="month" label={{ textStyle: { fontSize: 15 } }} />
        <Axis
          name="time"
          label={{
            formatter: val => `${val}小时`,
            textStyle: { fontSize: 15 }
          }}
        />
        <Tooltip
          crosshairs={{
            type: 'y'
          }}
        />
        <Geom
          type="line"
          position="month*time"
          size={2}
          color="item"
          shape="smooth"
        />
        <Geom
          type="point"
          position="month*time"
          size={4}
          shape="circle"
          color="item"
          style={{
            stroke: '#fff',
            lineWidth: 1
          }}
        />
      </Chart>
    </div>
  );
};


export default CEfficiencyAnalyseCurve;
