/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import COverallAnalyse from '../components/COverallAnalyse/COverallAnalyse';
import CSearchCondition from '../components/CSearchCondition/CSearchCondition';

const SAnalyseHeader = props => {
  const [state, setState] = useState();
  const getTime = (date) => {
    props.func(date);
  };
  return (
    <div className="AnalyseHeader">
      <COverallAnalyse projectName={props.projectName} />
      <CSearchCondition func={getTime} />
    </div>
  );
};

export default SAnalyseHeader;
