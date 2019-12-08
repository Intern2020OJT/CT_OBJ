import React from 'react';
import SClassifyAnalyse from '../components/SAnalyseRows/SClassifyAnalyse/SClassifyAnalyse';
import SEfficiencyAnalyse from '../components/SAnalyseRows/SEfficiencyAnalyse/SEfficiencyAnalyse';
import STopTenAnalyse from '../components/SAnalyseRows/STopTenAnalyse/STopTenAnalyse';

import CClassifyAnalyse from '../components/CAnalyseRows/CClassifyAnalyse/CClassifyAnalyse';
import CEfficiencyAnalyse from '../components/CAnalyseRows/CEfficiencyAnalyse/CEfficiencyAnalyse';
import CTopTenAnalyse from '../components/CAnalyseRows/CTopTenAnalyse/CTopTenAnalyse';

const SAnalyse = () => {
  return (
    <div className="Analyse">
      <CClassifyAnalyse />
      <CEfficiencyAnalyse/>
      <CTopTenAnalyse/>
    </div>
  );
};

export default SAnalyse;
