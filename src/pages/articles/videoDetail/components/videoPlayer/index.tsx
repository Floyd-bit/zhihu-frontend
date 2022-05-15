/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-04 21:44:41
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-15 22:09:01
 */
import { CaretDownOutlined, CaretUpOutlined, CommentOutlined, HeartOutlined, SendOutlined, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Player from 'griffith';
import React, { CSSProperties, useState } from 'react';
import styles from './index.css';
import { videoType } from '@/pages/articles/components/videoGrid/type';

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

interface starStateType {
    isStar: boolean;
    isFavoriate: boolean;
}

const VideoPlayer:React.FC<videoType> = (props) => {
    const [btnStyle, setBtnStyle] = useState(firstCSS);
    const [btntwoStyle, setBtnTwoStyle] = useState(firstCSS);    
    const [starNum, setStarNum] = useState(props.star);
    const [starState, setStarState] = useState<starStateType>({isStar: false, isFavoriate: false});

    const sources = {
        hd: {
          play_url: props.videoUrl,
        },
        sd: {
          play_url: props.videoUrl,
        },
    }

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
                <Player sources={sources} id="video" cover={props.cover} locale='zh-Hans'/>
            </div>
            <div className={styles.author}>
                <span className={styles.authorAvatar}>
                    <img src={props.authorAvatar} className={styles.avatar}></img>
                </span>
                <div className={styles.authorContent}>
                    <span className={styles.authorName}>{props.author}</span>
                    <div className={styles.authorDescription}>{props.authorDesc}</div>
                </div>
                <Button type='primary' ghost style={{ minWidth: '96px', marginLeft: '8px' }}>+关注</Button>
            </div>
            <div className={styles.content}>
                <div>
                    <div className={styles.headline}>
                        <h1 className={styles.title}>{props.title}</h1>
                    </div>
                    <p className={styles.description}>{props.title}</p>
                </div>
                <div className={styles.meta}>
                   发布于 {props.time} · {props.play}次播放
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
