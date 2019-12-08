import React from 'react';
import { Statistic,Card } from 'antd';

const CAverageTime = () => {
    return (
        <Card title="平均对应时间">
            <br/>
            <Statistic  
                style={{ width: '283px', height: '80px' }}
                valueStyle={{textAlign:'center',fontSize:30}}     
                value={12} //待修改
                precision={1}
                suffix={<span style={{fontSize:25}}> h</span>}
            />
        </Card>
    )
}

export default CAverageTime;