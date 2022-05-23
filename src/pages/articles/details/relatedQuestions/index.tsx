/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-18 17:58:32
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-23 17:15:13
 */
import { getArticleById, getSimilarQuestion } from "@/request/api/article";
import React, { useEffect, useMemo, useState } from "react";
import Link from "umi/link";
import { articleType, resIdType } from "../../type";
import styles from './style.css';

const RelatedQuestions:React.FC<{id: number}> = (props) => {
    const [data, setData] = useState<Array<articleType>>([]);

    useEffect(() => {
        getSimilarQuestion(props.id).then(res => {
            const result = res as number[];
            if(result.length) {
                const promises: Promise<any>[] = [];
                result.forEach((id: number) => {
                    promises.push(getArticleById(id));
                });
                Promise.all(promises).then(res => {
                    setData(res.map((item: resIdType<articleType>) => item.result));
                });
            }
        });
    }, []);

    const RelatedItem = useMemo(() => {
        return data.map((item: articleType, index: number) => {
            return (
                <div className={styles.similarItem} key={index}>
                    <a href={`/articles/detail?id=${item.id}`} className={styles.link}>{item.articleTitle}</a>
                    <span>{item.articleStar}个赞同</span>
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