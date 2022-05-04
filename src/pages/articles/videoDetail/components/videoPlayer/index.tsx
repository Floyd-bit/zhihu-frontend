/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-04 21:44:41
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-05 00:39:03
 */
import { Button } from 'antd';
import Player from 'griffith';
import React from 'react';
import styles from './index.css';

const sources = {
    hd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    },
    sd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
    },
}

const VideoPlayer:React.FC<{}> = () => {
    return (
        <>
            <Player sources={sources} id="video" cover='https://camo.githubusercontent.com/bf4a2c12b078e1711f1fa2f74c0bdfaa83806e2f4ef531895b06c17fb4278053/68747470733a2f2f7a687374617469632e7a686968752e636f6d2f6366652f67726966666974682f706c617965722e706e67' locale='zh-Hans'/>
            <div className={styles.author}>
                <span className={styles.authorAvatar}>
                    <img src='https://pic1.zhimg.com/v2-4299efbec62ccc5aafd75688ed23138b_is.jpg?source=12a79843' className={styles.avatar}></img>
                </span>
                <div className={styles.authorContent}>
                    <span className={styles.authorName}>宇宙搜索队</span>
                    <div className={styles.authorDescription}>我们熟悉的，并不是我们最了解的</div>
                    <Button type='primary' ghost>+关注</Button>
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    <div className={styles.headline}>
                        <h1>这绝对是一个世界级别的守门员！</h1>
                    </div>
                    <p className={styles.description}>这绝对是一个世界级别的守门员！</p>
                </div>
                <div className={styles.meta}>
                   发布于 2022-04-09 11:00 · 49.6 万次播放
                </div>
            </div>
            <div className={styles.options}></div>
            <div className={styles.tags}></div>
        </>
    )
}

export default React.memo(VideoPlayer);
