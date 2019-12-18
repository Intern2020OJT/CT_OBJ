import React from 'react';
import { Row, Col } from 'antd';

import CCcardone from '../components/CCanalysis/CCanalysisrowone/CCcardone'; 
// eslint-disable-next-line no-unused-vars
import CCcardtwo from '../components/CCanalysis/CCanalysisrowtwo/CCcardtwo';
// eslint-disable-next-line no-unused-vars
import CCcardthree from '../components/CCanalysis/CCanalysisrowthree/CCcardthree';
 
const SCanalysis = props => {
  // eslint-disable-next-line react/prop-types
  const getData = props.location.state.pullData;
 
  return (
    <div className="body bodyflow padding-bottom">
      <Row gutter={[100, 200]} type="flex" justify="center">
        <Col>
          { <CCcardone data={getData} />}
 
        </Col>
      </Row>
      <Row gutter={[100, 100]} type="flex" justify="center">
        <Col>
          <CCcardtwo data={getData} />
        </Col>
      </Row>
      <Row gutter={[100, 100]} type="flex" justify="center">
        <Col>
          { <CCcardthree data={getData} /> }
        </Col>
      </Row>
    </div>
  );
};
export default SCanalysis;
