import React from 'react';


import SAnalyse from './SAnalyse';


const SHome = (props) => {
  const getData=props.location.state.pullData
  return (
    <div className="home">
      <SAnalyse />
    </div>
  );
};

export default SHome;
