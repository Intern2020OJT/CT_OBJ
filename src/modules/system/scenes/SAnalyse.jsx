import React from 'react';
import SClassifyAnalyse from '../components/SAnalyseRows/SClassifyAnalyse/SClassifyAnalyse';
import SEfficiencyAnalyse from '../components/SAnalyseRows/SEfficiencyAnalyse/SEfficiencyAnalyse';
import STopTenAnalyse from '../components/SAnalyseRows/STopTenAnalyse/STopTenAnalyse';

const SAnalyse = () => {
  return (
    <div className="Analyse">
      <SClassifyAnalyse />
      <SEfficiencyAnalyse/>
      <STopTenAnalyse/>
    </div>
  );
};

export default SAnalyse;
