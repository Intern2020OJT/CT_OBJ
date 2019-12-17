import React from 'react';
import { Statistic,Card } from 'antd';

const COpenNumber = () => {
    return (
        <Card style={{border:'1px solid #D9D9D9'}}>
            <p style={{ fontSize: 18, margin: 20 }}>Issues Open 数</p>
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