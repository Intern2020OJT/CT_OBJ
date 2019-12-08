import React from 'react';

import COverallAnalyse from '../components/COverallAnalyse/COverallAnalyse';
import CSearchCondition from '../components/CSearchCondition/CSearchCondition';
import CClassifyAnalyse from '../components/CAnalyseRows/CClassifyAnalyse/CClassifyAnalyse';
import CEfficiencyAnalyse from '../components/CAnalyseRows/CEfficiencyAnalyse/CEfficiencyAnalyse';
import CTopTenAnalyse from '../components/CAnalyseRows/CTopTenAnalyse/CTopTenAnalyse';

const SAnalyse = () => {
  return (
    <div className="Analyse">
      <COverallAnalyse />
      <CSearchCondition />
      <CClassifyAnalyse />
      <CEfficiencyAnalyse/>
      <CTopTenAnalyse/>
    </div>
  );
};

export default SAnalyse;
