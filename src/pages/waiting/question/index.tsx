/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-29 00:40:21
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-30 18:33:04
 */
import { Button, Image } from "antd";
import React from "react";
import styles from './style.css';


const Question: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.questionHeader}>
                    <Image alt="" src="https://pic2.zhimg.com/v2-e1c3df73b84cf92861c1d142d3a23929_l.jpg?source=2231c908" style={{width: '20px', height: '20px', borderRadius: '50%', marginRight: '8px'}}/>
                    <div className={styles.headerText}>
                        <span>落惜 的提问</span>
                        <span>1天前</span>
                        <span>期待你的回答</span>
                    </div>
                </div>
                <div className={styles.questionContent}>
                    大学要自带被子吗?
                </div>
                <div className={styles.questionData}>
                    试试帮他解答~ 4回答 5关注
                </div>
            </div>
            <div className={styles.btnContent}>
                    <Button type="primary">写回答</Button>
                </div>
        </div>
    )
}

export default Question;