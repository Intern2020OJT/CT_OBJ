/* eslint-disable react/prop-types */
// ???????????
import React, { useState } from 'react';

import { ROUTE_ANALYSIS } from '../../../utils/constants';

import CContentBody from '../components/CContentBody';

import '../../../static/css/homeZC.less';


const SHomeZC = (props) => {
  const styleVisibility = {
    // visibility:"hidden"
    display: 'none'
  };
  let pullData;
  const [ableCheckboxState, setableCheckboxState] = useState('hidden');

  const ableCheckbox = () => {
    if (ableCheckboxState === 'hidden') {
      setableCheckboxState('visible');
      // console.log("1"+ableCheckboxState)
      document.getElementById('selectesA').innerHTML = '取消';
      document.getElementById('submitA').style.display = 'block';
      document.getElementById('updateA').style.display = 'block';
    } else {
      setableCheckboxState('hidden');
      document.getElementById('selectesA').innerHTML = '多选';
      document.getElementById('submitA').style.display = 'none';
      document.getElementById('updateA').style.display = 'none';
      // console.log("2"+ableCheckboxState)
    }
  };
  const getSonComponentsData = (res) => {
    pullData = res;
  };
  const itemsStatis = () => {
    if (pullData.length > 1) props.history.push(ROUTE_ANALYSIS, { pullData: pullData });
  };// 跳转到多个统计页面并传值

  return (
    <div id="headAndBody">
      <nav>
        <ul>
          <li><a id="updateA" style={styleVisibility}>更新</a></li>
          <li><a id="submitA" style={styleVisibility} onClick={itemsStatis}>确认</a></li>
          <li><a onClick={ableCheckbox} id="selectesA">多选</a></li>
        </ul>
      </nav>
      <div className="contentBody">
        <div>
          <CContentBody CheckboxState={ableCheckboxState} toFather={getSonComponentsData} history={props.history} />

        </div>
      </div>

    </div>
  );
};// ????

export default SHomeZC;
