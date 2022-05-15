/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-08 20:54:40
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-15 21:51:31
 */
import React, { useCallback } from 'react';
import style from './videoGrid.css';
import { Avatar, Image } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import Link from 'umi/link';
import router from 'umi/router';
import { videoType } from './type';

const VideoGrid:React.FC<{data: videoType}> = (props) => {
    const { data } = props;
    const linktoVideo = useCallback(() => {
        const jsonData = JSON.stringify(data);
        sessionStorage.setItem('video', jsonData);
        router.push('/articles/video')
    }, []);

    return (
        <div className={style.container} onClick={linktoVideo}>
            <div className={style.cover}>
                <Link to='/articles'><Image preview={false} src={data.cover}></Image></Link>
                <div className={style.hoverText}>
                    <PlayCircleOutlined />
                    <span style={{display: 'inline-block', marginLeft: '3px'}}>{data.play}</span>
                    <span style={{float:'right'}}>{data.hour}</span>
                </div>
            </div>
            <div className={style.title}>
            {data.title}
            </div>
            <div className={style.footer}>
                <div>
                    <Avatar size={20} src={data.authorAvatar} />
                    <span>{data.author}</span>
                </div>
                <div style={{color:'grey'}}>
                    ...
                </div>
            </div>
        </div>
    )
}

export default React.memo(VideoGrid);