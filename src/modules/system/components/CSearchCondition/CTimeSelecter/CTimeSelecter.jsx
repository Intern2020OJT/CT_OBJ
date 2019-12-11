import React from 'react';
import { Card,DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const CTimeSelecter = () => {
    return (
        <Card  style={{ width: '1220px', height: '150px' }}>
            <p style={{ fontSize: 18, margin: 20 }}>期间检索</p>
            <div style={{ display:'flex',flexDirection: 'row',justifyContent: 'center', }}>
                <p style={{ fontSize:20 }}>期间：</p>
                <RangePicker placeholder={['开始时间', '结束时间']} />
            </div>
        </Card>
    )
}

export default CTimeSelecter;