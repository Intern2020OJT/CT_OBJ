/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';


import SAnalyse from './SAnalyse';
import SAnalyseHeader from './SAnalyseHeader';


const SHome = (props) => {
  const projectName = props.location.state.pullData;
  const [time, setTime] = useState(['2019-01-01', '2020-01-01']);
  return (
    <div className="home">
      <SAnalyseHeader func={setTime} />
      <SAnalyse time={time} objName={projectName.name} />
    </div>
  );
};

export default SHome;
