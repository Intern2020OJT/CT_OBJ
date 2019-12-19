import React from 'react';

import CClassifyAnalyse from '../components/CAnalyseRows/CClassifyAnalyse/CClassifyAnalyse';
import CEfficiencyAnalyse from '../components/CAnalyseRows/CEfficiencyAnalyse/CEfficiencyAnalyse';
import CTopTenAnalyse from '../components/CAnalyseRows/CTopTenAnalyse/CTopTenAnalyse';

const SAnalyse = () => {
  const objName = '2020_Intern_Object';
  const start = '2019-01-01';
  const end = '2020-01-01';
  return (
    <div className="Analyse">
      <CClassifyAnalyse objName={objName} start={start} end={end} />
      <CEfficiencyAnalyse objName={objName} start={start} end={end} />
      <CTopTenAnalyse objName={objName} start={start} end={end} />
    </div>
  );
};

export default SAnalyse;
