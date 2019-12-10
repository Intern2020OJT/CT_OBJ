import React from "react";
import { Chart, Geom, Axis, Tooltip, Label} from "bizcharts";

const CCpolythree = props => {
  
    const data = props.data;
    const cols = {
      people: {
        min: 0,
        alias: '参与人员',
      },
      project: {
        range: [0, 1],
        alias: '项目',
      }
    }
    return (
      <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          
          <Axis name="project"  title={{textStyle:{fontSize: '12',
              textAlign: 'center',
              fill: '#111',
           }}} />
           <Axis name="people"  title={{textStyle:{fontSize: '12',
            textAlign: 'center',
            fill: '#111',
           }}} />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="project*people" size={2} />
          <Geom
            type="point"
            position="project*people"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          >
           <Label content={['people']} />{' '}
          </Geom>
        </Chart>
      </div>
    );
}
export default CCpolythree;
 
