/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-28 00:35:03
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-15 17:39:06
 */
import React from "react";
import { Button, Image } from "antd";
import styles from './style.css';
import { exploreSpecialData, exploreSpecialContent } from '../type';

const SpecialCard: React.FC<{ data: exploreSpecialData }> = (props) => {
    const { data } = props;
    const ContentItem = (props: {content: exploreSpecialContent}) => {
        return (
                <div className={styles.contentItem}>
                    <div className={styles.contentTag}>
                         {props.content.answers}
                    </div>
                    <div className={styles.contentTitle}>
                        {props.content.title}
                    </div>
                </div>
        )
    }
    const contentList = data.content.map((item: exploreSpecialContent, index: number) => {
        return <ContentItem key={index} content={item}/>;
    })
    return (
        <>
        <Image style={{width: '100%'}} src={data.banner}></Image>
        <div className={styles.specialHeader}>
            <div className={styles.specialInfo}>
                <div className={styles.specialTitle}>{data.title}</div>
                <div className={styles.specialCount}>
                    <span>{data.description}</span>
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