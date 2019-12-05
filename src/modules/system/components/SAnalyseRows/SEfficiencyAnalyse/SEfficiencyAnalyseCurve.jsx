import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend
} from "bizcharts";

const SEfficiencyAnalyseCurve = () => {
    const data = [
        {
            month: "Jan",
            item: "平均对应时长",
            time: 7
        },
        {
            month: "Feb",
            item: "平均对应时长",
            time: 6.9
        },
        {
            month: "Mar",
            item: "平均对应时长",
            time: 9.5
        },
        {
            month: "Apr",
            item: "平均对应时长",
            time: 14.5
        },
        {
            month: "May",
            item: "平均对应时长",
            time: 18.4
        },
        {
            month: "Jun",
            item: "平均对应时长",
            time: 21.5
        },
        {
            month: "Jul",
            item: "平均对应时长",
            time: 25.2
        },
        {
            month: "Aug",
            item: "平均对应时长",
            time: 26.5
        },
        {
            month: "Sep",
            item: "平均对应时长",
            time: 23.3
        },
        {
            month: "Oct",
            item: "平均对应时长",
            time: 18.3
        },
        {
            month: "Nov",
            item: "平均对应时长",
            time: 13.9
        },
        {
            month: "Dec",
            item: "平均对应时长",
            time: 9.6
        }
    ];
    const cols = {
        month: {
            range: [0, 1]
        }
    };
    return (
        <div className="curveEfficiency">
            <Chart height={400} data={data} scale={cols} forceFit>
                <Legend />
                <Axis name="month" />
                <Axis
                    name="time"
                    label={{
                        formatter: val => `${val}小时`
                    }}
                />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom
                    type="line"
                    position="month*time"
                    size={2}
                    color={"item"}
                    shape={"smooth"}
                />
                <Geom
                    type="point"
                    position="month*time"
                    size={4}
                    shape={"circle"}
                    color={"item"}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
        </div>
    );
}


export default SEfficiencyAnalyseCurve;