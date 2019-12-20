/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import COverallAnalyse from '../components/COverallAnalyse/COverallAnalyse';
import CSearchCondition from '../components/CSearchCondition/CSearchCondition';

const SAnalyseHeader = props => {
  return (
    <div className="AnalyseHeader">
      <COverallAnalyse projectName={props.projectName} />
      <CSearchCondition func={props.func} />
    </div>
  );
};

export default SAnalyseHeader;
