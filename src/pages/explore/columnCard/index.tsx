/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-28 16:02:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-15 17:38:36
 */
import { Button, Image } from "antd";
import React from "react";
import { exploreColumnData } from "../type";
import styles from './style.css';

const ColumnCard: React.FC<{data: exploreColumnData}> = (props) => {
    const { data } = props;

    return (
        <div className={styles.columnCard}>
            <div className={styles.avatar}>
                <Image style={{width: '100%', height: '100%', borderRadius: '50%'}} src={data.avatar}/>
            </div>
            <div className={styles.title}>
                {data.name}
            </div>
            <div className={styles.count}>
                <span>{data.subscribe}关注</span>
                <span>{data.articles}文章</span>
            </div>
            <div className={styles.intro}>
                {data.description}
            </div>
            <Button type="primary">进入专栏</Button>
        </div>
    )
}

export default React.memo(ColumnCard);