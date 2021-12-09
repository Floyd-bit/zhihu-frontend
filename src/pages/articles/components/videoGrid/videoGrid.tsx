/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-08 20:54:40
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-08 21:51:59
 */
import React from 'react';
import style from './videoGrid.css';
import { Avatar, Image } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import Link from 'umi/link';

export default () => {
    return (
        <div className={style.container}>
            <div className={style.cover}>
                <Link to='/'><Image preview={false} src="https://pic1.zhimg.com/80/v2-1ff047be5330509bb33c34b2f374e7fe_400x224.jpg?source=1940ef5c"></Image></Link>
                <div className={style.hoverText}>
                    <PlayCircleOutlined />
                    <span style={{display: 'inline-block', marginLeft: '3px'}}>31.5万播放</span>
                    <span style={{float:'right'}}>4:15</span>
                </div>
            </div>
            <div className={style.title}>
            他生下来是个大肉球，父母一度要让他自生自灭，如今怎么样? 记者带你走进他的生活。
            </div>
            <div className={style.footer}>
                <div>
                    <Avatar size={20} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span>UP主</span>
                </div>
                <div style={{color:'grey'}}>
                    ...
                </div>
            </div>
        </div>
    )
}