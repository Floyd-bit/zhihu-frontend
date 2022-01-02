/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-01-02 15:14:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-01-02 16:19:54
 */
import { MessageOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";
import style from './index.css';

export interface UserInfoRes {
    username: string,
    description: string,
    avatar: string,
    answer: number,
    article: number,
    subscriber: number
}

const UserInfoComponent: React.FC<UserInfoRes> = (props) => {
    return (
        <>
        <div className={style.avatarContainer}>
        <div className={style.avatar}>
            <Avatar shape="square" size="large" src={props.avatar} />
        </div>
        <div className={style.introduction}>
            <div style={{ fontWeight: 'bold' }}>{props.username}</div>
            <div>{props.description}</div>
        </div>
    </div>
    <div className={style.dataShow}>
        <div className={style.data}>
            <div className={style.dataTitle}>回答</div>
            <div className={style.dataNumber}>{props.answer}</div>
        </div>
        <div className={style.data}>
            <div className={style.dataTitle}>文章</div>
            <div className={style.dataNumber}>{props.article}</div>
        </div>
        <div className={style.data}>
            <div className={style.dataTitle}>关注者</div>
            <div className={style.dataNumber}>{props.subscriber}</div>
        </div>
    </div>
    <div className={style.btnArea}>
        <Button type="primary"><PlusOutlined />关注他</Button>
        <Button><MessageOutlined />发私信</Button>
    </div>
    </>
    )
}

export default UserInfoComponent;