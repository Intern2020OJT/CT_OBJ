import React from 'react';
import { Row, Col} from 'antd';
import CTimeTopTen from './CTimeTopTen/CTimeTopTen';
import CCommentsTopTen from './CCommentsTopTen/CCommentsTopTen';

const CTopTenAnalyse = () => {
    const data = [
        {
            shortName: "某某...发1",
            fullName: "某某功能开发1",
            time: 15,
            comments: 13
        },
        {
            shortName: "某某...发2",
            fullName: "某某功能开发2",
            time: 16,
            comments: 19
            
        },
        {
            shortName: "某某...发3",
            fullName: "某某功能开发3",
            time: 8,
            comments: 24
        },
        {
            shortName: "某某...发4",
            fullName: "某某功能开发4",
            time: 25,
            comments: 55
        },
        {
            shortName: "某某...发5",
            fullName: "某某功能开发5",
            time: 6,
            comments: 30
        },
        {
            shortName: "某某...发6",
            fullName: "某某功能开发6",
            time: 13,
            comments: 8
        },
        {
            shortName: "某某...发7",
            fullName: "某某功能开发7",
            time: 20,
            comments: 12
        },
        {
            shortName: "某某...发8",
            fullName: "某某功能开发8",
            time: 25,
            comments: 25
        },
        {
            shortName: "某某...发10",
            fullName: "某某功能开发10",
            time: 55,
            comments: 22
        },
        {
            shortName: "某某...发9",
            fullName: "某某功能开发9",
            time: 69,
            comments: 21
        }
    ];
    return (
        <Row gutter={[10,150]} type="flex" justify="center">
            <Col>
               <CTimeTopTen data={data}/>
            </Col>
            <Col>
               <CCommentsTopTen data={data}/>
            </Col>
        </Row>
    );
};

export default CTopTenAnalyse;