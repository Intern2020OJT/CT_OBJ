import React from 'react';
import { Row, Col,Card } from 'antd';
import CEfficiencyAnalyseCurve from './CEfficiencyAnalyseCurve';

const CEfficiencyAnalyse = () => {
    const data = [
        {
            month: "Jan",
            item: "平均对应时长",
            time: 7
        },
        {
            month: "Feb",
            item: "平均对应时长",
            time: 6.9
        },
        {
            month: "Mar",
            item: "平均对应时长",
            time: 9.5
        },
        {
            month: "Apr",
            item: "平均对应时长",
            time: 14.5
        },
        {
            month: "May",
            item: "平均对应时长",
            time: 18.4
        },
        {
            month: "Jun",
            item: "平均对应时长",
            time: 21.5
        },
        {
            month: "Jul",
            item: "平均对应时长",
            time: 25.2
        },
        {
            month: "Aug",
            item: "平均对应时长",
            time: 26.5
        },
        {
            month: "Sep",
            item: "平均对应时长",
            time: 23.3
        },
        {
            month: "Oct",
            item: "平均对应时长",
            time: 18.3
        },
        {
            month: "Nov",
            item: "平均对应时长",
            time: 13.9
        },
        {
            month: "Dec",
            item: "平均对应时长",
            time: 9.6
        }
    ];
    return (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} type="flex" justify="center">
            <Col>
                <Card
                    style={{ width: '1232px', height: '500px' }}
                    title="平均对应时间分析"
                >
                    <CEfficiencyAnalyseCurve data={data} />
                </Card>
                
            </Col>
        </Row>
    );
};

export default CEfficiencyAnalyse;