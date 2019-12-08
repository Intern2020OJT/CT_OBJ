import React, { useState, useEffect } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { Col } from 'antd';
import { get } from '../../../../utils/fetch';
import { API_OPENINGISSUES } from '../../../../utils/constants';
import Openingissues from '../../../../utils/openingissues'


// class CAnalysistwo extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     }
//   }
// //在第一次选然后调用
//   componentDidMount() {
//     this.fetch();
//   }

//   async fetch() {
//     const data = await get(API_OPENINGISSUES);
//     this.setState({ data });
//   }

//   render() {
//     //定义度量
//     const cols = {
//       sold: { alias: 'issueOpen平均时间(/h)' },
//       genre: { alias: '项目名称' }
//     };

//     const { data } = this.state;
//     console.log(2);
//     // const result = await get(API_OPENINGISSUES);
//     // console.log(result)
//     return (
//       <Col span={12}>
//         <div className="body">
//           <p className="p-font">多项目issues平均oppen时间分析</p>
//           <div className="padding-right">
//             <Chart width={500} height={540} data={data} forceFit scale={cols}>
//               <Legend position="top" dy={-20} />
//               <Tooltip />
//               <Axis name="sold" title />
//               <Axis name="genre" title />
//               <Geom type="interval" position="genre*sold" color="genre" />
//             </Chart>
//           </div>
//         </div>
//       </Col>
//     );
//   }
// }


const CAnalysistwo = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get(API_OPENINGISSUES);
      setData(data);
    }
    fetchData();
  }, []);
   
    //定义度量
    const cols = {
      sold: { alias: 'issueOpen平均时间(/h)' },
      genre: { alias: '项目名称' }
    };

    return (
      <Col span={12}>
        <div className="body">
          <p className="p-font">多项目issues平均oppen时间分析</p>
          <div className="padding-right">
            <Chart width={500} height={540} data={data} forceFit scale={cols}>
              <Legend position="top" dy={-20} />
              <Tooltip />
              <Axis name="sold" title />
              <Axis name="genre" title />
              <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
          </div>
        </div>
      </Col>
    );
};
export default CAnalysistwo;
