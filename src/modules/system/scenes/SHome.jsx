import React from 'react';


import SAnalyse from './SAnalyse';
import SAnalyseHeader from './SAnalyseHeader';


const SHome = (props) => {
  // const getData = props.location.state.pullData
  return (
    <div className="home">
      <SAnalyseHeader />
      <SAnalyse />
    </div>
  );
};

export default SHome;
