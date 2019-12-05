import React from 'react';
import { Statistic, Row, Col, Icon } from 'antd';

require('../../../static/css/SOverallAnalyse.less');

const SOverallAnalyse = () => {
  return (
    <div style={{ padding: '30px' }}>
      <Row gutter={16}>
        <Col span={6}>
          <Statistic className="stat" title="总数" value={1128} />
        </Col>
        <Col span={6}>
          <Statistic className="stat" title="平均对应时间" value={1128} suffix=" h" />
        </Col>
        <Col span={6}>
          <Statistic className="stat" title="滞留率" value={93} prefix={<Icon type="left" />} suffix=" %" />
        </Col>
        <Col span={6}>
          <Statistic className="stat" title="Open数" value={93} />
        </Col>
      </Row>
    </div>
  );
};

export default SOverallAnalyse;
