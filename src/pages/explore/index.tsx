/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-27 22:44:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-15 17:58:56
 */
import { Card, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './style.css';
import ProblemList from './problemList';
import SpecialCard from './SpecialCard';
import ColumnCard from './columnCard';
import { getExplorecolumn, getRoundTable, getExploreSpecial } from '@/request/api/explore';
import { getArticleByPage } from '@/request/api/article';
import { exploreColumnData, exploreColumnState, exploreSpecialData, exploreSpecialState, roundTableState } from "./type";
import { resType, articleType} from '../articles/type';

const Explore: React.FC<{}> = () => {
    const [questions, setQuestions] = useState<Array<articleType>>();
    const [exploreColumn, setExploreColumn] = useState<exploreColumnState>();
    const [roundTable, setRoundTable] = useState<roundTableState>();
    const [exploreSpecial, setExploreSpecial] = useState<exploreSpecialState>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getArticleByPage({size: 8, page: 1}).then(res => {
            console.log(res);
            setQuestions(res.result.content);
        })
        getExplorecolumn().then(res => {
            setExploreColumn(res as exploreColumnState);
        });
        getRoundTable().then(res => {
            setRoundTable(res as roundTableState);
        });
        getExploreSpecial().then(res => {
            setExploreSpecial(res as exploreSpecialState);
            setLoading(false);
        });
    }, []);

    const SprcialCardList = loading? <Skeleton active /> : exploreSpecial?.data.map((item: exploreSpecialData, index: number) => {
        return (<div className={styles.specialCard} key={index}>
            <SpecialCard data={item} />
        </div>)
    });

    const RoundTableList = loading? <Skeleton active /> : roundTable?.data.map((item: exploreSpecialData, index: number) => {
        return (<div className={styles.specialCard} key={index}>
            <SpecialCard data={item} />
        </div>
        )
    });

    const ExploreColumnList = loading? <Skeleton active /> : exploreColumn?.data.map((item: exploreColumnData, index: number) => {
        return <ColumnCard key={index} data={item}/>
    });

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>好问题广场</span>
            </div>
            <div className={styles.problemGround}>
                <Card title='近期热点' style={{ width: '47%', margin: '0', paddingLeft: '24px', paddingRight: '24px' }}>
                    <ProblemList data={questions?.slice(0, 4)}/>
                </Card>
                <Card title="潜力好问题" style={{ width: '47%', margin: '0', paddingLeft: '24px', paddingRight: '24px' }}>
                    <ProblemList data={questions?.slice(4)}/>
                </Card>
            </div>
            <div className={styles.more}>
                <div className={styles.moreButton}>
                    <span style={{ lineHeight: '48px' }}>查看更多好问题</span>
                </div>
            </div>
            <div className={styles.title} style={{ marginTop: '32px' }}>
                <span>最新专题</span>
            </div>
            <div className={styles.specials}>
                {SprcialCardList}
            </div>
            <div className={styles.more}>
                <div className={styles.moreButton}>
                    <span style={{ lineHeight: '48px' }}>查看更多专题</span>
                </div>
            </div>
            <div className={styles.title} style={{ marginTop: '32px' }}>
                <span>圆桌讨论</span>
            </div>
            <div className={styles.specials}>
                {RoundTableList}
            </div>
            <div className={styles.more}>
                <div className={styles.moreButton}>
                    <span style={{ lineHeight: '48px' }}>查看更多圆桌</span>
                </div>
            </div>
            <div className={styles.title} style={{ marginTop: '32px' }}>
                <span>专栏</span>
            </div>
            <div className={styles.contentSection}>
                <div className={styles.columns}>
                    {ExploreColumnList}
                </div>
            </div>
            <div className={styles.more}>
                <div className={styles.moreButton}>
                    <span style={{ lineHeight: '48px' }}>查看更多专栏</span>
                </div>
            </div>
        </div>
    )
}

export default Explore;