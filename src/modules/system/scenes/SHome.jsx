/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';


import SAnalyse from './SAnalyse';
import SAnalyseHeader from './SAnalyseHeader';


const SHome = (props) => {
  const projectName = props.location.state.pullData;
  const [time, setTime] = useState([]);
  const getTime = (res) => {
    console.log(projectName.name);
    console.log(res);
  };

  return (
    <div className="home">
      <SAnalyseHeader func={getTime} />
      <SAnalyse time={time} objName={projectName.name} />
    </div>
  );
};

export default SHome;
