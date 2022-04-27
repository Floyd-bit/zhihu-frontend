/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-27 23:10:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-27 23:48:59
 */

import React from "react";
import styles from './style.css';

interface problemDataType {
    id: number,
    title: string,
    look: string,
    subscribe: string,
    answer: string
}

const ProblemList: React.FC<{}> = () => {
    const problemData = [1,2,3,4];

    const ProblemItem = (problemData) => {
        return (
            <div className={styles.problemItemContainer}>
                <div className={styles.problemTitle}>xxxxxxxx</div>
                <div className={styles.problemData}>
                    901 万浏览 · 4297 关注 · 2421 回答
                </div>
            </div>
        )
    }
    const problem = problemData.map((item, index) => {
        return <ProblemItem problemData={item} key={index}></ProblemItem>
    })    
    return (
        <>{problem}</>
    )
}

export default React.memo(ProblemList);