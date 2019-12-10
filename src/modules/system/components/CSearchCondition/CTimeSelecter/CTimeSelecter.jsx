import React from 'react';
import { Card,DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const CTimeSelecter = () => {
    return (
        <Card title="检索条件" style={{ width: '1232px', height: '150px' }}>
            <br/>
            <div style={{ display:'flex',flexDirection: 'row',justifyContent: 'center', }}>
                <p style={{ fontSize:20 }}>期间：</p>
                <RangePicker placeholder={['开始时间', '结束时间']} />
            </div>
        </Card>
    )
}

export default CTimeSelecter;