import React, {useState} from 'react';
import {Card} from 'antd';
import CCpolythree from './CCpolythree'
const CCcardthree = () => {
    const data = [
        {
          project: "1991",
          people: 3
        },
        {
          project: "1992",
          people: 4
        },
        {
          project: "1993",
          people: 3.5
        },
        {
          year: "1994",
          people: 5
        },
        {
          project: "1995",
          people: 4.9
        },
        {
          project: "1996",
          people: 6
        },
        {
          project: "1997",
          people: 7
        },
        {
          project: "1998",
          people: 9
        },
        {
          project: "1999",
          people: 13
        }
      ];
      const [tabs, setState] = useState('bar');
      const tabList = [
        {
          key: 'bar',
          tab: '折线图',
        } 
      ];
      const contentList = {
        bar: <CCpolythree data={data}/>,
      };
    
      return (
        <Card
          style={{ width: '1200px', height: '500px' }}
          title="项目参与人员"
          tabList={tabList}
        >
          {contentList[tabs]}
        </Card>
      );
    };
export default CCcardthree;
