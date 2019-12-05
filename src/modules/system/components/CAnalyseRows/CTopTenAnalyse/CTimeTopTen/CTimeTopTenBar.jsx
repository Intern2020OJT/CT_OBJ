import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
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
                    name="issues"
                    label={{
                        offset: 12
                    }}
                />
                <Axis name="time" />
                <Tooltip />
                <Geom type="interval" position="id*time" color="issues" />
            </Chart>
        </div>
    );
}


export default CTimeTopTenBar;