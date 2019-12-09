import React from 'react';

import { Card, Radio, Checkbox } from 'antd';

import '../../../static/css/CGitContent.less';

function CGitContent(props) {

  return (

    <div className="divContaner">
      {()=>{
        if(props.CheckboxState==="true")
          return <Checkbox className="radioRight" ></Checkbox>
        }
      }
      <div className="divBlock">
        <label>this is git production</label>
      </div>
    </div>
  );
}
//或需要换
export default CGitContent;
