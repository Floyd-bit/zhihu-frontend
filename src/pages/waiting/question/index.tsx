/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-29 00:40:21
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-23 22:47:24
 */
import { Button, Image } from "antd";
import React from "react";
import router from "umi/router";
import styles from './style.css';


const Question: React.FC<{userName: string, days: number, question: string, answers: number, subscribe: number, id: number}> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.questionHeader}>
                    <Image alt="" src="https://pic2.zhimg.com/v2-e1c3df73b84cf92861c1d142d3a23929_l.jpg?source=2231c908" style={{width: '20px', height: '20px', borderRadius: '50%', marginRight: '8px'}}/>
                    <div className={styles.headerText}>
                        <span>{props.userName} 的提问</span>
                        <span>{props.days}天前</span>
                        <span>期待你的回答</span>
                    </div>
                </div>
                <div className={styles.questionContent}>
                    {props.question}
                </div>
                <div className={styles.questionData}>
                    试试帮他解答~ {props.answers}回答 {props.subscribe}关注
                </div>
            </div>
            <div className={styles.btnContent}>
                    <Button type="primary" onClick={()=>{router.push(`/articles/detail?id=${props.id}`)}}>写回答</Button>
                </div>
        </div>
    )
}

export default Question;