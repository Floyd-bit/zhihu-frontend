/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-09-29 22:47:31
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-23 00:33:01
 */
import { Card } from 'antd';
import styles from './index.css';
import React, { useEffect, useState } from 'react';
import AnimalList from './components/proList/proList';
import RightList from './components/rightList/rightList';
import { getAnimals } from '@/request/api/animal';

const tabListNoTitle = [
  {
    key: 'article',
    tab: '通知',
  },
  {
    key: 'app',
    tab: '私信',
  },
  {
    key: 'project',
    tab: '与我相关',
  },
];

const contentListNoTitle = [
  <p>article content</p>,
  <p>app content</p>,
  <p>project content</p>,
];


export default function () {

  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  const [noTitleKey, setNoTitleKey] = useState('article');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getAnimals().then((res: any) => {
        setData(res.result.slice(0,4));
        setLoading(false);
    }
    )
}, []);
  return (
    <div className={styles.container}>
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={noTitleKey}
        onTabChange={key => {
          setNoTitleKey(key);
          switch (key) {
            case 'article':
              setIndex(0);
              break;
            case 'app':
              setIndex(1);
              break;
            case 'project':
              setIndex(2);
              break;
          }
        }}
      >
        {contentListNoTitle[index]}
      </Card>
      <div className={styles.main}>
        <div className={styles.animal}>
          <AnimalList col={2} data={data} isLoading={loading}/>
        </div>
        <div className={styles.right}>
          <RightList />
        </div>
      </div>
    </div>
  );
}
