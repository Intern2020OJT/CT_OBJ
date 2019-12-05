import React from 'react';
import SOverallAnalyse from './SOverallAnalyse';
import SClassifyAnalyse from './SAnalyseRows/SClassifyAnalyse/SClassifyAnalyse';

const SAnalyse = () => {
  return (
    <div className="Analyse">
      <SOverallAnalyse />
      <SClassifyAnalyse />
    </div>
  );
};

export default SAnalyse;
