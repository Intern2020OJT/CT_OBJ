import React from 'react';
import { Statistic,Card } from 'antd';

const CAverageTime = () => {
    return (
        <Card style={{border:'1px solid #D9D9D9'}}>
            <p style={{ fontSize: 18, margin: 20 }}>平均对应时间</p>
            <br/>
            <Statistic  
                style={{ width: '283px', height: '80px' }}
                valueStyle={{textAlign:'center',fontSize:30}}     
                value={12.191} //待修改
                precision={2}
                suffix={<span style={{fontSize:25}}> h</span>}
            />
        </Card>
    )
}

export default CAverageTime;