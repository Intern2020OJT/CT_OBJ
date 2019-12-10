import React from 'react';
import { Statistic,Card } from 'antd';

const COpenNumber = () => {
    return (
        <Card title="Open 数">
            <br/>
            <Statistic  
                style={{ width: '283px', height: '80px' }}
                valueStyle={{textAlign:'center',fontSize:30}}     
                value={12}//待修改 
            />
        </Card>
    )
}

export default COpenNumber;