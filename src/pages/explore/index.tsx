/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-27 22:44:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-13 21:53:27
 */
import { Card } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './style.css';
import ProblemList from './problemList';
import SpecialCard from './SpecialCard';
import ColumnCard from './columnCard';
import { getExplorecolumn, getRoundTable, getExploreSpecial } from '@/request/api/explore';
import { exploreColumnState, exploreSpecialData, exploreSpecialState, roundTableState } from "./type";

const Explore: React.FC<{}> = () => {
    const [exploreColumn, setExploreColumn] = useState<exploreColumnState>();
    const [roundTable, setRoundTable] = useState<roundTableState>();
    const [exploreSpecial, setExploreSpecial] = useState<exploreSpecialState>();
    
    useEffect(() => {
        getExplorecolumn().then(res => {
            console.log(res)
        });
        getRoundTable().then(res => {
            console.log(res)
        });
        getExploreSpecial().then(res => {
            console.log(res)
        });
    }, []);
    
    const SprcialCardList = exploreSpecial?.data.map((item: exploreSpecialData, index: number) => {
        return <SpecialCard key={index}/>
    })

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
        <div className={styles.more}>
            <div className={styles.moreButton}>
                <span style={{lineHeight: '48px'}}>查看更多好问题</span>
            </div>
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
        <div className={styles.more}>
            <div className={styles.moreButton}>
                <span style={{lineHeight: '48px'}}>查看更多专题</span>
            </div>
        </div>
        <div className={styles.title} style={{marginTop: '32px'}}>
            <span>圆桌讨论</span>
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
        <div className={styles.more}>
            <div className={styles.moreButton}>
                <span style={{lineHeight: '48px'}}>查看更多圆桌</span>
            </div>
        </div>
        <div className={styles.title} style={{marginTop: '32px'}}>
            <span>专栏</span>
        </div>
        <div className={styles.contentSection}>
            <div className={styles.columns}>
                <ColumnCard/>
                <ColumnCard/>
                <ColumnCard/>
                <ColumnCard/>
            </div>
        </div>
        <div className={styles.more}>
            <div className={styles.moreButton}>
                <span style={{lineHeight: '48px'}}>查看更多专栏</span>
            </div>
        </div>
    </div>
    )
}

export default Explore;