// ???????????
import React, { useState } from 'react';

import { Form, Input, Modal, Button, Row, Col, Icon, message, Checkbox } from 'antd';

import CGitContent from '../components/CGitContent';
import CGitAddModal from '../components/CGitAddModal';
import CContentBody from '../components/CContentBody';

import '../../../static/css/homeZC.less';


const SHomeZC = () => {
  const styleVisibility = {
    // visibility:"hidden"
    display: 'none'
  };
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
  return (
    <div id="headAndBody">
      <nav>
        <ul>
          <li><a id="updateA" style={styleVisibility}>更新</a></li>
          <li><a id="submitA" style={styleVisibility}>确认</a></li>
          <li><a onClick={ableCheckbox} id="selectesA">多选</a></li>
        </ul>
      </nav>
      <div className="contentBody">
        <div>
          <CContentBody CheckboxState={ableCheckboxState} />

        </div>
      </div>

    </div>
  );
};// ????

export default SHomeZC;
