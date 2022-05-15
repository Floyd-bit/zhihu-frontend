/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-04 22:41:16
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-16 01:02:23
 */
import React from "react";
import styles from './index.css';
import { Image } from "antd";
import { videoType } from "@/pages/articles/components/videoGrid/type";

const VideoRecommendation:React.FC<{data: Array<videoType>}> = (props) => {
    const {data} = props;
    const VideoRecommendationItem = (props: {data: videoType}) => {
        const { data } = props;
        return (
            <div className={styles.videoItemWrapper}>
                <div className={styles.videoItem}>
                    <div className={styles.thumbnail}>
                        <Image style={{width: '100%', height: '100%', borderRadius: 'inherit'}} src={data.cover}/>
                        <div className={styles.duration}>{data.hour}</div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.meta}>
                            <span className={styles.avatar}>
                                <img style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit'}} src={data.authorAvatar}></img>
                            </span>
                            <div className={styles.metaText}>
                                <span style={{marginRight: '10px'}}>{data.author}</span>
                                <span>{data.play}次播放</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {data.map((item: videoType, index: number) => {
                return <VideoRecommendationItem data={item} key={index}/>
            })}
        </div>
    )
}

export default React.memo(VideoRecommendation);