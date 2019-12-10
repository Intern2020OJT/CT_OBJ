import React from 'react';
import { Statistic,Card } from 'antd';

const CTotal = () => {
    return (
        <Card title="总数">
            <br/>
            <Statistic  
                style={{ width: '283px', height: '80px' }}
                valueStyle={{textAlign:'center',fontSize:30}}     
                value={1128}//待修改 
            />
        </Card>
    )
}

export default CTotal;