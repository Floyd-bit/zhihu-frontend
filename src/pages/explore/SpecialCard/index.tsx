/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-28 00:35:03
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-28 18:06:12
 */
import React from "react";
import { Button, Image } from "antd";
import styles from './style.css';

const SpecialCard: React.FC<{}> = () => {
    const data =[1,2,3];
    const ContentItem = () => {
        return (
                <div className={styles.contentItem}>
                    <div className={styles.contentTag}>
                         哪张照片会让你想起妈妈？背后有什么故事？
                    </div>
                    <div className={styles.contentTitle}>
                        哪张照片会让你想起妈妈？背后有什么故事？
                    </div>
                </div>
        )
    }
    const contentList = data.map((item, index) => {
        return <ContentItem key={index}/>;
    })
    return (
        <>
        <Image style={{width: '100%'}} src="https://pic4.zhimg.com/100/v2-08ac7a1f4b36509bfd9985df29cd9a2b_hd.png"></Image>
        <div className={styles.specialHeader}>
            <div className={styles.specialInfo}>
                <div className={styles.specialTitle}>2022 全民营养周妇幼营养科普嘉年华</div>
                <div className={styles.specialCount}>
                    <span>4小时前更新</span>
                    <span>7,392,419浏览</span>
                </div>
            </div>
            <div className={styles.specialButton}>
                <Button type="primary">关注专题</Button>
            </div>
        </div>
        <div className={styles.contentList}>
            {contentList}
        </div>
        </>
    )
}

export default React.memo(SpecialCard);