import React from 'react';

import { Card, Radio, Checkbox } from 'antd';

import '../../../static/css/CGitContent.less';

function CGitContent(props) {
  const lastCheckboxState = props.CheckboxState;
  var 
  const onChange=(e)=>{
    console.log(`checked = ${e.target.checked}`);
  }

  return (

    <div className="divContaner" >
      {
        lastCheckboxState == 'visible' && <Checkbox className="radioRight" onChange={onChange} />
      }

      <div className="divBlock">
        <label id="programContext">{props.ContentName.name}</label>
      </div>
    </div>
  );
}
// 或需要换
export default CGitContent;
