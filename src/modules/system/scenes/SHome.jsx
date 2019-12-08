import React from 'react';
import SAnalyse from './SAnalyse';
import SAnalyseHeader from './SAnalyseHeader';

const SHome = () => {
  return (
    <div className="home"> 
      <SAnalyseHeader />  
      <SAnalyse />
    </div>
  );
};

export default SHome;
