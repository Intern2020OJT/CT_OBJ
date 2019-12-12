import React from 'react';

import { Card, Radio, Checkbox } from 'antd';

import '../../../static/css/CGitContent.less';

function CGitContent(props) {
  var styleVisibilityH={
    visibility:"hidden"
    //display:"none"
  }
  var styleVisibilityV={
    visibility:"visible"
    //display:"none"
  }
  const lastCheckboxState=props.CheckboxState;
  return (

    <div className="divContaner">
      {
        //props.CheckboxState?(<Checkbox className="radioRight" style={styleVisibilityV}></Checkbox>):(<Checkbox className="radioRight" style={styleVisibilityH}></Checkbox>)
        lastCheckboxState=="visible" && <Checkbox className="radioRight" style={styleVisibilityV}></Checkbox>
      }
      
      <div className="divBlock">
        <label>this is git production</label>
      </div>
    </div>
  );
}
//或需要换
export default CGitContent;
