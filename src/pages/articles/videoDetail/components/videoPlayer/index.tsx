/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-04 21:44:41
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-06 00:19:40
 */
import { CaretDownOutlined, CaretUpOutlined, CommentOutlined, HeartOutlined, SendOutlined, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Player from 'griffith';
import React, { CSSProperties, useState } from 'react';
import styles from './index.css';

const sources = {
    hd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    },
    sd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
    },
}

const primaryStyle: CSSProperties = {
    backgroundColor: '#E5EFFF',
    color: '#0066FF'
}

const changedStyle: CSSProperties = {
    backgroundColor: '#0066FF',
    color: '#FFFFFF'
}

const firstCSS = {
    key: 1,
    css: primaryStyle
}

const secondCSS = {
    key: 2,
    css: changedStyle
}

declare interface articleProps {
    key?: number,
    id?: number,
    title: string,
    description: string,
    star?: number,
    isClick?: boolean,
    showBtn: boolean,
    isHtml?: boolean
    showComment?: Function
}

interface starStateType {
    isStar: boolean;
    isFavoriate: boolean;
}

const VideoPlayer:React.FC<{}> = () => {
    const [btnStyle, setBtnStyle] = useState(firstCSS);
    const [btntwoStyle, setBtnTwoStyle] = useState(firstCSS);    
    const [starNum, setStarNum] = useState(135);
    const [starState, setStarState] = useState<starStateType>({isStar: false, isFavoriate: false});

    const handleStar = () => {
        if(btnStyle.key === 1) {
            if(btntwoStyle.key === 2)
                setBtnTwoStyle(firstCSS);
            setBtnStyle(secondCSS);
        } else {
            setBtnStyle(firstCSS);
        }
        setStarNum((pre: number) => pre && (btnStyle.key===1 ? pre+1 : pre-1));
    }

    const handleOppose = () => {
        if(btntwoStyle.key === 1) {
            if(btnStyle.key === 2)
                setBtnStyle(firstCSS);
            setBtnTwoStyle(secondCSS);
        } else {
            setBtnTwoStyle(firstCSS);
        }
    }

    const changeStarState = () => {
        setStarState((pre: starStateType) => {
            return {
                ...pre,
                isStar: !pre.isStar
            }
        });
    }

    const changeFavoriateState = () => {
        setStarState((pre: starStateType) => {
            return {
                ...pre,
                isFavoriate: !pre.isFavoriate
            }
        });
    }
    
    return (
        <>
            <div className={styles.videoContainer}>
                <Player sources={sources} id="video" cover='https://camo.githubusercontent.com/bf4a2c12b078e1711f1fa2f74c0bdfaa83806e2f4ef531895b06c17fb4278053/68747470733a2f2f7a687374617469632e7a686968752e636f6d2f6366652f67726966666974682f706c617965722e706e67' locale='zh-Hans'/>
            </div>
            <div className={styles.author}>
                <span className={styles.authorAvatar}>
                    <img src='https://pic1.zhimg.com/v2-4299efbec62ccc5aafd75688ed23138b_is.jpg?source=12a79843' className={styles.avatar}></img>
                </span>
                <div className={styles.authorContent}>
                    <span className={styles.authorName}>宇宙搜索队</span>
                    <div className={styles.authorDescription}>我们熟悉的，并不是我们最了解的</div>
                </div>
                <Button type='primary' ghost style={{ minWidth: '96px', marginLeft: '8px' }}>+关注</Button>
            </div>
            <div className={styles.content}>
                <div>
                    <div className={styles.headline}>
                        <h1 className={styles.title}>这绝对是一个世界级别的守门员！</h1>
                    </div>
                    <p className={styles.description}>这绝对是一个世界级别的守门员！</p>
                </div>
                <div className={styles.meta}>
                   发布于 2022-04-09 11:00 · 49.6 万次播放
                </div>
            </div>
            <div className={styles.footer}>
                <Button style={btnStyle.css} onClick={handleStar}><CaretUpOutlined />
                    <span>赞同</span>
                    <span style={{display: 'inline-block', marginLeft: '0.3em'}}>{starNum}</span>
                </Button>
                <Button style={btntwoStyle.css} onClick={handleOppose}><CaretDownOutlined /></Button>
                <span className={styles.mobile}><CommentOutlined />评论</span>
                <span className={styles.mobile}><SendOutlined />分享</span>
                <span className={styles.mobile} onClick={changeFavoriateState}><StarOutlined style={starState.isFavoriate ? {color: 'orange'} : {}}/>收藏</span>
                <span className={styles.mobile} onClick={changeStarState}><HeartOutlined style={starState.isStar ? {color: 'red'} : {}}/>喜欢</span>
                <span className={styles.mobile}>...</span>
            </div>
            <div className={styles.tags}></div>
        </>
    )
}

export default React.memo(VideoPlayer);
