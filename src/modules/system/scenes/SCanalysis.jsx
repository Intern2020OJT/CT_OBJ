import React from 'react';
import { Row, Col } from 'antd';
import CCcardoneleft from '../components/CCanalysis/CCanalysisrowone/CCcardrowoneleft/CCcardoneleft' 
import CCcardoneright from '../components/CCanalysis/CCanalysisrowone/CCcardrowoneright/CCcardoneright'
const SCanalysis = () => {
  return (
    <div className="body bodyflow padding-bottom">
      <Row gutter={[100, 200]} type="flex" justify="center">
        <Col>
           <CCcardoneleft/>
        </Col>
        <Col>
           <CCcardoneright/>
        </Col>
      </Row>
      {/* <Row gutter={[100, 200]} type="flex" justify="center">
        <Col>
          <Card style={{ width: '500px', height: '600px' }} title="多项目issuesOppen分析" >
            <CCanalysisone />
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '500px', height: '600px' }} title="多项目issues平均oppen时间分析" >
            <CCanalysistwo />
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};
export default SCanalysis;
