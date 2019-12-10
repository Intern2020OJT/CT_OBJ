import React from 'react';
import { Statistic,Card,Icon } from 'antd';

const CRetentionRate = () => {
    return (
        <Card title="滞留率">
            <br/>
            <Statistic  
                style={{ width: '283px', height: '80px' }}
                valueStyle={{textAlign:'center',fontSize:30}}     
                value={5}//待修改 
                prefix={<Icon type="left" style={{fontSize:25}} />}
                suffix={<span style={{fontSize:25}}> %</span>}
            />
        </Card>
    )
}

export default CRetentionRate;