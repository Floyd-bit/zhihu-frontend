/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-04 21:43:51
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-06 00:26:42
 */
import React from "react";
import styles from './index.css';
import VideoPlayer from "./components/videoPlayer";
import VideoRecommendation from "./components/videoRecommendation";
import Comments from "../components/comments";

const VideoDetail = () => {
    return(
        <div className={styles.container}>
            <div className={styles.mainColumn}>
                <VideoPlayer/>
                <div style={{ marginTop: '1em' }}>
                    <Comments/>
                </div>
            </div>
            <div className={styles.sideColumn}>
                <h2 style={{fontWeight: 600,marginTop: 0,marginBottom: '6px',fontSize: '17px',lineHeight: '20px',color: '#121212'}}>相关推荐</h2>
                <VideoRecommendation/>
            </div>
        </div>
    )
}

export default VideoDetail;