/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react';

import CClassifyAnalyse from '../components/CAnalyseRows/CClassifyAnalyse/CClassifyAnalyse';
import CEfficiencyAnalyse from '../components/CAnalyseRows/CEfficiencyAnalyse/CEfficiencyAnalyse';
import CTopTenAnalyse from '../components/CAnalyseRows/CTopTenAnalyse/CTopTenAnalyse';

const SAnalyse = props => {
  const objName = props.objName;
  const start = props.time[0];
  const end = props.time[1];
  return (
    <div className="Analyse">
      <CClassifyAnalyse objName={objName} start={start} end={end} />
      <CEfficiencyAnalyse objName={objName} start={start} end={end} />
      <CTopTenAnalyse objName={objName} start={start} end={end} />
    </div>
  );
};

export default SAnalyse;
