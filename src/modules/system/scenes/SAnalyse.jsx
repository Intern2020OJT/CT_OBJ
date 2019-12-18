import React from 'react';

import COverallAnalyse from '../components/COverallAnalyse/COverallAnalyse';
import CSearchCondition from '../components/CSearchCondition/CSearchCondition';
import CClassifyAnalyse from '../components/CAnalyseRows/CClassifyAnalyse/CClassifyAnalyse';
import CEfficiencyAnalyse from '../components/CAnalyseRows/CEfficiencyAnalyse/CEfficiencyAnalyse';
import CTopTenAnalyse from '../components/CAnalyseRows/CTopTenAnalyse/CTopTenAnalyse';

const SAnalyse = () => {
  const objName = '2020_Intern_Object';
  return (
    <div className="Analyse">
      <COverallAnalyse />
      <CSearchCondition />
      <CClassifyAnalyse objName={objName} />
      <CEfficiencyAnalyse objName={objName} />
      <CTopTenAnalyse objName={objName} />
    </div>
  );
};

export default SAnalyse;
