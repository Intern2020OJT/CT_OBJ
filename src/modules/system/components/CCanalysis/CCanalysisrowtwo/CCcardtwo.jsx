import React, {useState} from 'react';
import {Card} from 'antd';
import CCbartwo from './CCbartwo'
const CCcardtwo = () => {
  const data = [
    {
      name: 'AllIssues',
      project1: 1200,
      project2: 500
    },
    {
      name: 'OpeningIssues',
      project1: 1000,
      project2: 300
    },
  ];
      const [tabs, setState] = useState('bar');
      const tabList = [
        {
          key: 'bar',
          tab: '柱状图',
        } 
      ];
      const contentList = {
        bar: <CCbartwo data={data}/>,
      };
    
      return (
        <Card
          style={{ width: '1200px', height: '500px' }}
          title="多项目issuesOppen分析"
          tabList={tabList}
          // activeTabKey={tabs}
          // onTabChange={key => {
          //   setState(key);
          // }}
        >
          {contentList[tabs]}
        </Card>
      );
    };
export default CCcardtwo;
