/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

import { Checkbox } from 'antd';

import { ROUTE_HOME } from '../../../utils/constants';
import '../../../static/css/CGitContent.less';

function CGitContent(props) {
  const lastCheckboxState = props.CheckboxState;
  let checkState; // 圈选状态
  let returnName; // 返回到父部件的数据，暂时确立为此模块所代表项目的名称
  const onChange = (e) => {
    checkState = e.target.checked;
    returnName = props.ContentName.name;
    const returnData = {
      checkState: checkState,
      returnName: returnName
    };
    props.returnData(returnData);
  };
  const itemStatis = () => {
    if (lastCheckboxState !== 'visible') {
      const midName = {
        name: props.ContentName.name
      };
      props.history.push(ROUTE_HOME, { pullData: midName });
    }// 处于多选时不会执行
  };

  return (

    <div className="divContaner" onClick={itemStatis}>
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
