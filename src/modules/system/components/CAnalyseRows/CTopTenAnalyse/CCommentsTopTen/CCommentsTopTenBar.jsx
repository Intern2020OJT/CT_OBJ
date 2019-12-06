import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend
} from "bizcharts";
import DataSet from "@antv/data-set";

const CCommentsTopTenBar = props => {
    const data = props.data;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.source(data).transform({
        type: "sort",
        callback(a, b) {
            // 排序依据，和原生js的排序callback一致
            return a.comments - b.comments > 0;
        }
    });
    return (
        <div>
            <Chart height={500} data={dv} forceFit>
                <Coord transpose />
                <Legend />
                <Axis
                    name="issues"
                    label={{
                        offset: 12
                    }}
                />
                <Axis name="comments" />
                <Tooltip />
                <Geom type="interval" position="id*comments">
                    <Label content={['issues']} />{' '}
                </Geom>
            </Chart>
        </div>
    );
}


export default CCommentsTopTenBar;