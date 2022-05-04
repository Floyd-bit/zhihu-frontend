/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-04 22:41:16
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-04 23:08:24
 */
import React from "react";
import styles from './index.css';
import { Image } from "antd";

const VideoRecommendation:React.FC<{}> = () => {
    const data = [1,2,3,4,5];
    const VideoRecommendationItem = () => {
        return (
            <div className={styles.videoItemWrapper}>
                <div className={styles.videoItem}>
                    <div className={styles.thumbnail}>
                        <Image style={{width: '100%', height: '100%', borderRadius: 'inherit'}} src='https://pic3.zhimg.com/v2-0d05c232e9e902a3a1a00caaa0efc1ad_qhd.jpg?source=12a79843'/>
                        <div className={styles.duration}>2:09</div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>拼爹不要太嚣张，不要太凡尔赛</div>
                        <div className={styles.meta}>
                            <span className={styles.avatar}>
                                <img style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit'}} src='https://pic3.zhimg.com/v2-4299efbec62ccc5aafd75688ed23138b_s.jpg?source=12a79843'></img>
                            </span>
                            <div className={styles.metaText}>
                                <span style={{marginRight: '10px'}}>宇宙搜索队</span>
                                <span>9.6万次播放</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {data.map((item, index) => {
                return <VideoRecommendationItem key={index}/>
            })}
        </div>
    )
}

export default React.memo(VideoRecommendation);