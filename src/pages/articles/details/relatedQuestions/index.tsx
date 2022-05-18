/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-18 17:58:32
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-18 18:10:18
 */
import React, { useMemo, useState } from "react";
import styles from './style.css';

const RelatedQuestions:React.FC<{}> = () => {
    const [data, setData] = useState([1,2,3,4,5]);

    const RelatedItem = useMemo(() => {
        return data.map((item: any, index: number) => {
            return (
                <div className={styles.similarItem} key={index}>
                    <a className={styles.link}>如果怼把自己放在道德制高点任性批评别人的人？</a>
                    <span>1个回答</span>
                </div>
            )
        })
    }, [data]);

    return (
        <div className={styles.similarList}>
            {RelatedItem}
        </div>
    )
}

export default RelatedQuestions;