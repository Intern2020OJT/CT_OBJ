import React from 'react';

import CClassifyAnalyse from '../components/CAnalyseRows/CClassifyAnalyse/CClassifyAnalyse';
import CEfficiencyAnalyse from '../components/CAnalyseRows/CEfficiencyAnalyse/CEfficiencyAnalyse';
import CTopTenAnalyse from '../components/CAnalyseRows/CTopTenAnalyse/CTopTenAnalyse';

const SAnalyse = () => {
  return (
    <div className="Analyse">
      <CClassifyAnalyse />
      <CEfficiencyAnalyse />
      <CTopTenAnalyse />
    </div>
  );
};

export default SAnalyse;
