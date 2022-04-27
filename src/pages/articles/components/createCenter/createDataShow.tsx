/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-27 21:41:51
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-27 22:29:43
 */
import React from 'react';
import styles from './styles.css';

const CreateDataShow: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.title}>
                    今日阅读(播放)数
                </div>
                <div className={styles.number}>
                    0
                </div>
                <div className={styles.history}>
                    <span className={styles.histotyTitle}>昨日数据</span>
                    <span className={styles.historyNumber}>0</span>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.title}>
                    今日新增赞同数
                </div>
                <div className={styles.number}>
                    0
                </div>
                <div className={styles.history}>
                    <span className={styles.histotyTitle}>昨日数据</span>
                    <span className={styles.historyNumber}>0</span>
                </div>
            </div>
        </div>
    )
}

export default CreateDataShow;