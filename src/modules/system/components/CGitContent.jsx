import React from 'react';

import { Card, Radio, Checkbox } from 'antd';

import '../../../static/css/CGitContent.less';

function CGitContent(props) {
  const styleVisibilityH = {
    visibility: 'hidden'
    // display:"none"
  };
  const styleVisibilityV = {
    visibility: 'visible'
    // display:"none"
  };
  const setText = () => {
    // console.log(props.ContentName.name)
    // document.getElementById("programContext").innerHTML=props.ContentName.name
    // return props.ContentName.name
  };
  const lastCheckboxState = props.CheckboxState;
  return (

    <div className="divContaner" >
      {
        // props.CheckboxState?(<Checkbox className="radioRight" style={styleVisibilityV}></Checkbox>):(<Checkbox className="radioRight" style={styleVisibilityH}></Checkbox>)
        lastCheckboxState == 'visible' && <Checkbox className="radioRight" style={styleVisibilityV} />
      }

      <div className="divBlock">
        <label id="programContext">{props.ContentName.name}</label>
      </div>
    </div>
  );
}
// 或需要换
export default CGitContent;
