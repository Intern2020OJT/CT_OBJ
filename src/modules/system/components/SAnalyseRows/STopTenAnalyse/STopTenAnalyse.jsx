import React from 'react';
import { Row, Col} from 'antd';
import STimeTopTen from './STimeTopTen/STimeTopTen';
import SCommentsTopTen from './SCommentsTopTen/SCommentsTopTen';

const STopTenAnalyse = () => {
    const data = [
        {
            id: "13",
            issues: "某某功能开发1",
            time: 15,
            comments: 13
        },
        {
            id: "14",
            issues: "某某功能开发2",
            time: 16,
            comments: 19
            
        },
        {
            id: "15",
            issues: "某某功能开发3",
            time: 8,
            comments: 24
        },
        {
            id: "16",
            issues: "某某功能开发4",
            time: 25,
            comments: 55
        },
        {
            id: "17",
            issues: "某某功能开发5",
            time: 6,
            comments: 30
        },
        {
            id: "18",
            issues: "某某功能开发6",
            time: 13,
            comments: 8
        },
        {
            id: "19",
            issues: "某某功能开发7",
            time: 20,
            comments: 12
        },
        {
            id: "20",
            issues: "某某功能开发8",
            time: 25,
            comments: 25
        },
        {
            id: "21",
            issues: "某某功能开发9",
            time: 69,
            comments: 21
        },
        {
            id: "22",
            issues: "某某功能开发10",
            time: 55,
            comments: 22
        }
    ];
    return (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} type="flex" justify="center">
            <Col>
               <STimeTopTen data={data}/>
            </Col>
            <Col>
               <SCommentsTopTen data={data}/>
            </Col>
        </Row>
    );
};

export default STopTenAnalyse;