/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

import { Checkbox } from 'antd';

import '../../../static/css/CGitContent.less';

function CGitContent(props) {
  const lastCheckboxState = props.CheckboxState;
  const onChange = (e) => {
    // eslint-disable-next-line no-console
    console.log(`checked = ${e.target.checked}`);
  };

  return (

    <div className="divContaner">
      {
        lastCheckboxState === 'visible' && <Checkbox className="radioRight" onChange={onChange} />
      }

      <div className="divBlock">
        <label id="programContext">{props.ContentName.name}</label>
      </div>
    </div>
  );
}
// 或需要换
export default CGitContent;
