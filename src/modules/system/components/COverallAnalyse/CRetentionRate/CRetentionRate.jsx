import React from 'react';
import { Statistic,Card,Icon } from 'antd';

const CRetentionRate = () => {
    return (
        <Card style={{border:'1px solid #D9D9D9'}}>
            <p style={{ fontSize: 18, margin: 20 }}>Issues 滞留率</p>
            <Statistic  
                style={{ width: '283px', height: '80px' }}
                valueStyle={{textAlign:'center',color:'green',fontSize:40}}     
                value={5}//待修改 
                prefix={<Icon type="left" style={{fontSize:25}} />}
                suffix={<span style={{fontSize:25}}> %</span>}
            />
        </Card>
    )
}

export default CRetentionRate;