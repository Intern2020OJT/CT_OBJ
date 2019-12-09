//???????????
import React from 'react';

import CGitContent from '../components/CGitContent';
import CGitAddModal from '../components/CGitAddModal';
import CContentBody from '../components/CContentBody';
import { Form, Input, Modal, Button, Row, Col, Icon, message } from 'antd';

import '../../../static/css/homeZC.less';


const SHomeZC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a>更新</a></li>
          <li><a>多选</a></li>
        </ul>
      </nav>

      <div className="contentBody">
        <div>
          <CContentBody></CContentBody>
          
        </div>
      </div>

    </div>
  );
};//????

export default SHomeZC;
