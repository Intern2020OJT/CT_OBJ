/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Chart,
  Geom,
  Tooltip,
  Coord,
  Label,
  View,
} from 'bizcharts';
import DataSet from '@antv/data-set';

const CClassifyLablesAnalysePie = props => {
  const { DataView } = DataSet;
  const { data } = props;
  const dv = new DataView();
  dv.source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
  });
  const cols = {
    percent: {
      formatter: (val) => {
        val = `${(val * 100).toFixed(2)}%`;
        return val;
      },
    },
  };
  const dv1 = new DataView();
  dv1.source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent',
  });
  return (
    <div className="pieLabels">
      <Chart
        width={600}
        height={460}
        data={dv}
        scale={cols}
        padding={[0, 80, 80, 80]}
        forceFit
      >
        <Coord type="theta" radius={0.5} />
        <Tooltip
          showTitle={false}
          // eslint-disable-next-line max-len
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="type"
          tooltip={[
            'type*percent',
            (item, percent) => {
              percent = `${(percent * 100).toFixed(2)}%`;
              return {
                name: item,
                value: percent,
              };
            },
          ]}
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
          select={false}
        >
          <Label
            content="type"
            offset={-10}
            textStyle={{
              fontSize: '15'
            }}
          />
        </Geom>
        <View data={dv1} scale={cols}>
          <Coord type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
          <Geom
            type="intervalStack"
            position="percent"
            color="name"
            tooltip={[
              'name*percent',
              (item, percent) => {
                percent = `${(percent * 100).toFixed(2)}%`;
                return {
                  name: item,
                  value: percent,
                };
              },
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
            select={false}
          >
            <Label
              content="name"
              textStyle={{
                fontSize: '15'
              }}
            />
          </Geom>
        </View>
      </Chart>
    </div>
  );
};

export default CClassifyLablesAnalysePie;
