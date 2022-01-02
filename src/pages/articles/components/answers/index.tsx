/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-21 20:14:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-01-02 15:51:35
 */
import { getUserInfo } from "@/request/api/user";
import { CaretDownOutlined, CaretUpOutlined, CommentOutlined, HeartOutlined, SendOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Avatar, Card } from "antd";
import React, { CSSProperties, useEffect, useState } from "react";
import { UserInfoRes } from "../userInfo";
import style from './style.css';

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

export declare interface AnswerInterface {
    key: number,
    description: string,
    date: string,
    avatar: string,
    star: number,
    user: number
}

export const primaryUser = {
    username: "灰灰计算机考研",
    description: "计算机考研咨询",
    avatar: "https://pic3.zhimg.com/v2-284e82f428ae27818df2df7344cbd21d_im.jpg",
    answer: 79,
    article: 1005,
    subscriber: 54719
}

export default function (props: AnswerInterface) {
    const [btnStyle, setBtnStyle] = useState(firstCSS);
    const [btntwoStyle, setBtnTwoStyle] = useState(firstCSS);
    const [starNum, setStarNum] = useState(props.star);
    const [user, setUser] = useState<UserInfoRes>(primaryUser);
    
    useEffect(() => {
        getUserInfo(props.user).then((res: any) => {
            setUser(res.data);
        })
    }, []);

    const handleStar = () => {
        if (btnStyle.key === 1) {
            if (btntwoStyle.key === 2)
                setBtnTwoStyle(firstCSS);
            setBtnStyle(secondCSS);
        } else {
            setBtnStyle(firstCSS);
        }
        setStarNum((pre: number) => btnStyle.key === 1 ? pre + 1 : pre - 1);
    }

    const handleOppose = () => {
        if (btntwoStyle.key === 1) {
            if (btnStyle.key === 2)
                setBtnStyle(firstCSS);
            setBtnTwoStyle(secondCSS);
        } else {
            setBtnTwoStyle(firstCSS);
        }
    }

    return (
        <>
            <Card>
                <div className={style.container}>
                    <div className={style.avatarContainer}>
                        <div className={style.avatar}>
                            <Avatar shape="square" size="large" src={user.avatar} />
                        </div>
                        <div className={style.introduction}>
                            <div style={{ fontWeight: 'bold' }}>{user.username}</div>
                            <div>{user.description}</div>
                        </div>
                    </div>
                    <div style={{ color: '#8590A6', margin: '10px' }}>
                        {props.star}人赞同了该回答
                    </div>
                    {/* 条件渲染，根据条件选择是否渲染html,存在xss风险 */}
                    <div className={style.description} dangerouslySetInnerHTML={{ __html: props.description }}></div>
                    <div style={{color: '#8590A6'}}>编辑于{props.date}</div>
                    <div className={style.footer}>
                        <Button style={btnStyle.css} onClick={handleStar}><CaretUpOutlined />
                            <span>赞同</span>
                            <span style={{ display: 'inline-block', marginLeft: '0.3em' }}>{starNum}</span>
                        </Button>
                        <Button style={btntwoStyle.css} onClick={handleOppose}><CaretDownOutlined /></Button>
                        <span><CommentOutlined />评论</span>
                        <span><SendOutlined />分享</span>
                        <span><StarOutlined />收藏</span>
                        <span><HeartOutlined />喜欢</span>
                        <span>...</span>
                    </div>
                </div>
            </Card>
        </>
    )
}