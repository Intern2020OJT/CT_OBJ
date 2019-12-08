import React from 'react';
import { Card,DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const CTimeSelecter = () => {
    return (
        <Card title="检索条件" style={{ width: '1232px', height: '150px' }}>
            <div style={{ float:'left'}}>
                <p style={{ fontSize:20 }}>期间：</p>
                <RangePicker  />
            </div>
        </Card>
    )
}

export default CTimeSelecter;