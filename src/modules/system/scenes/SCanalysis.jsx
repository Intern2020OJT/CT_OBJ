import React from 'react';
import { Row } from 'antd';

import CAnalysisone from '../components/CAnalysis/CAnalysisone';
import CAnalysistwo from '../components/CAnalysis/CAnalysistwo';

const SCanalysis = () => {
  return (
    <div className="bodyWhite">
      <Row gutter={[24, 24]}>
        <CAnalysisone />
        <CAnalysistwo />
      </Row>
      <Row gutter={[24, 24]}>
        <CAnalysisone />
        <CAnalysistwo />
      </Row>
    </div>
  );
};
export default SCanalysis;
