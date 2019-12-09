import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label
} from "bizcharts";
import DataSet from "@antv/data-set";


const CTimeTopTenBar = props => {
    const data = props.data;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.source(data).transform({
        type: "sort",
        callback(a, b) {
            // 排序依据，和原生js的排序callback一致
            return a.time - b.time > 0;
        }
    });
    return (
        <div>
            <Chart height={500} data={dv} forceFit>
                <Coord transpose />
                <Axis
                    name="shortName"
                    label={{
                        offset: 12
                    }}
                />
                <Axis name="time" />
                <Tooltip 
                // title = {this.items[0].point._origin.fullName}
                />
               <Geom
                    type="interval"
                    position="shortName*time"
                    tooltip={['fullName*time', (fullName, time) => {
                        return {
                          //自定义 tooltip 上显示的 title 显示内容等。
                          name: fullName,
                          title: fullName,
                          value: time
                        };
                      }]}>
                    <Label offset={3} content={['time']} />{''}
                </Geom>
            </Chart>
        </div>
    );
}


export default CTimeTopTenBar;