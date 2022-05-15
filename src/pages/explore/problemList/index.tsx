/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-27 23:10:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-15 17:56:06
 */

import { articleType } from "@/pages/articles/type";
import React from "react";
import styles from './style.css';

const ProblemList: React.FC<{data: Array<articleType> | undefined}> = (props) => {
    const { data } = props;
    const ProblemItem = (props: {problemData: articleType}) => {
        return (
            <div className={styles.problemItemContainer}>
                <div className={styles.problemTitle}>{props.problemData.articleTitle}</div>
                <div className={styles.problemData}>
                    901 万浏览 · 4297 关注 · 2421 回答
                </div>
            </div>
        )
    }
    const problem = data?.map((item: articleType) => {
        return <ProblemItem problemData={item} key={item.id}></ProblemItem>
    })    
    return (
        <>{problem}</>
    )
}

export default React.memo(ProblemList);