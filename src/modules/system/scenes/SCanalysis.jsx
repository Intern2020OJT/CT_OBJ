import React from 'react';
import { Row, Col } from 'antd';
import CCcardone from '../components/CCanalysis/CCanalysisrowone/CCcardone' 
import CCcardtwo from '../components/CCanalysis/CCanalysisrowtwo/CCcardtwo'
import CCcardthree from '../components/CCanalysis/CCanalysisrowthree/CCcardthree'
const SCanalysis = () => {
  return (
    <div className="body bodyflow padding-bottom">
      <Row gutter={[100, 200]} type="flex" justify="center">
        <Col>
         { <CCcardone/>}
        </Col>
      </Row>
      <Row gutter={[100,100]} type="flex" justify="center">
        <Col>
          <CCcardtwo/>
        </Col>
      </Row>
      <Row gutter={[100,100]} type="flex" justify="center">
        <Col>
          { <CCcardthree/> }
        </Col>
      </Row>
    </div>
  );
};
export default SCanalysis;
