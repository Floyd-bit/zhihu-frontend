/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-04 21:43:51
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-18 17:14:15
 */
import React, { useEffect, useState } from "react";
import styles from './index.css';
import VideoPlayer from "./components/videoPlayer";
import VideoRecommendation from "./components/videoRecommendation";
import Comments from "../components/comments";
import { videoType, resType } from "../components/videoGrid/type";
import { getVideo } from "@/request/api/article";

const primaryData = {
    title: "我的妈妈是流浪猫，它什么都给不了我，却又什么都给了我。",
    author: "宠物漫画家",
    play: "16.4万",
    authorAvatar: "https://pic1.zhimg.com/v2-a1804b926c09c8051000d4bb838651c5_s.jpg?source=12a79843",
    cover: "https://pic3.zhimg.com/v2-2cbce2c4da47312834e79a592ed3f8f0_640w.jpg?source=12a79843",
    hour: "1:04",
    authorDesc: "为宠物发声【宠物漫画家】",
    videoUrl: "https://vdn.vzuu.com/HD/7e4dce9e-cde7-11ec-9512-1e24a98f1351-v4_t10000111-wfhgO8h1xB.mp4?disable_local_cache=1&bu=http-da4bec50&c=avc.4.0&f=mp4&expiration=1652259737&auth_key=1652259737-0-0-d0dce78931242d384ccbf9e83cea14ab&v=ali&pu=da4bec50",
    star: 259,
    time: "2022-05-07 17:26"
}

const VideoDetail = () => {
    const [videoData, setVideoData] = useState<videoType>(primaryData);
    const [recommendData, setRecommendData] = useState<Array<videoType>>([primaryData]);
    useEffect(() => {
        const stringdata = sessionStorage.getItem('video');
        const data = stringdata ? JSON.parse(stringdata) : primaryData;
        setVideoData(data);
        getVideo().then(res => {
            const result = res as resType;
            setRecommendData(result.data);
        })
    }, []);
    return(
        <div className={styles.container}>
            <div className={styles.mainColumn}>
                <VideoPlayer {...videoData}/>
                <div style={{ marginTop: '1em' }}>
                    <Comments type="answer" id={1}/>
                </div>
            </div>
            <div className={styles.sideColumn}>
                <h2 style={{fontWeight: 600,marginTop: 0,marginBottom: '6px',fontSize: '17px',lineHeight: '20px',color: '#121212'}}>相关推荐</h2>
                <VideoRecommendation data={recommendData}/>
            </div>
        </div>
    )
}

export default VideoDetail;