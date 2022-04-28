/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-28 16:02:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-28 16:12:25
 */
import { Button, Image } from "antd";
import React from "react";
import styles from './style.css';

const ColumnCard: React.FC<{}> = () => {
    return (
        <div className={styles.columnCard}>
            <div className={styles.avatar}>
                <Image style={{width: '100%', height: '100%', borderRadius: '50%'}} src="https://pic3.zhimg.com/v2-2fae2561cbb15474d9cc4ab1a35ac252_xl.jpg?source=d16d100b"/>
            </div>
            <div className={styles.title}>
                抽屉电影
            </div>
            <div className={styles.count}>
                <span>3,471关注</span>
                <span>2,158文章</span>
            </div>
            <div className={styles.intro}>
                胡说八道
            </div>
            <Button type="primary">进入专栏</Button>
        </div>
    )
}

export default React.memo(ColumnCard);