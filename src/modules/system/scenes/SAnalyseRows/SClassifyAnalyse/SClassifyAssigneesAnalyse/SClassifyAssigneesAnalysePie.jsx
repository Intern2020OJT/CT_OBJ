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

const SClassifyAssigneesAnalysePie = () => {
  const { DataView } = DataSet;
  const data = [
    {
      value: 18,
      type: 'Proyang',
      name: 'ProyangOpen',
    },
    {
      value: 80,
      type: 'Proyang',
      name: 'ProyangClose',
    },
    {
      value: 28,
      type: 'AyaseEUmi',
      name: 'AyaseEUmiOpen',
    },
    {
      value: 55,
      type: 'AyaseEUmi',
      name: 'AyaseEUmiClose',
    },
    {
      value: 39,
      type: 'airoucat',
      name: 'airoucatOpen',
    },
    {
      value: 55,
      type: 'airoucat',
      name: 'airoucatClose',
    },
    {
      value: 81,
      type: 'Shanxiaolin',
      name: 'ShanxiaolinOpen',
    },
    {
      value: 36,
      type: 'Shanxiaolin',
      name: 'ShanxiaolinClose',
    },
  ];
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
    <div className="pieLables">
      <Chart
        width={600}
        height={460}
        data={dv}
        scale={cols}
        padding={[80, 100, 80, 80]}
        forceFit
      >
        <Coord type="theta" radius={0.5} />
        <Tooltip
          showTitle={false}
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
          <Label content="type" offset={-10} />
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
            <Label content="name" />
          </Geom>
        </View>
      </Chart>
    </div>
  );
};

export default SClassifyAssigneesAnalysePie;
