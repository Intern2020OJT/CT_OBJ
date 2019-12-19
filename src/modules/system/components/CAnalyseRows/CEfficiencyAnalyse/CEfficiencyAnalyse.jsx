/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';


import { API_GETEFFICIENCY } from '../../../../../utils/constants';
import { get } from '../../../../../utils/fetch';

import CEfficiencyAnalyseCurve from './CEfficiencyAnalyseCurve';

const CEfficiencyAnalyse = props => {
  const [data, setData] = useState([]);
  const start = props.start;
  const end = props.end;
  const objName = props.objName;
  // eslint-disable-next-line no-console
  // console.log(props);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_GETEFFICIENCY, { objName, start, end });
      setData(data);
    };
    fetchData();
  }, [end, objName, start]);
  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={[10, 15]} type="flex" justify="center">
        <Col>
          <Card
            style={{ width: '1420px', height: '500px' }}
          ><p style={{ fontSize: 18, margin: 20 }}>平均对应时间分析</p>
            <CEfficiencyAnalyseCurve data={data} />
          </Card>

        </Col>
      </Row>
    </div>
  );
};

export default CEfficiencyAnalyse;
