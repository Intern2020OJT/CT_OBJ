import React from 'react';
import { Statistic,Card } from 'antd';

const CAverageTime = () => {
    return (
        <Card title="总数">
            <Statistic  
                style={{ width: '283px', height: '100px' }}
                valueStyle={{textAlign:'center',color:'red',fontSize:40}}     
                value={1128} 
            />
        </Card>
    )
}

export default CAverageTime;