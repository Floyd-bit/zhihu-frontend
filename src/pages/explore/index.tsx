/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-27 22:44:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-28 01:01:42
 */
import { Card } from 'antd';
import React from 'react';
import styles from './style.css';
import ProblemList from './problemList';
import SpecialCard from './SpecialCard';

const Explore: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
        <div className={styles.title}>
            <span>好问题广场</span>
        </div>
        <div className={styles.problemGround}>
            <Card title='近期热点' style={{width: '47%', margin: '0', paddingLeft: '24px', paddingRight: '24px'}}>
                <ProblemList/>
            </Card>
            <Card title="潜力好问题" style={{width: '47%', margin: '0', paddingLeft: '24px', paddingRight: '24px'}}>
                <ProblemList/>
            </Card>
        </div>
        <div className={styles.title} style={{marginTop: '32px'}}>
            <span>最新专题</span>
        </div>
        <div className={styles.specials}>
            <div className={styles.specialCard}>
                <SpecialCard/>
            </div>
            <div className={styles.specialCard}>
                <SpecialCard/>
            </div>
            <div className={styles.specialCard}>
                <SpecialCard/>
            </div>
            <div className={styles.specialCard}>
                <SpecialCard/>
            </div>
        </div>
        </div>
    )
}

export default Explore;