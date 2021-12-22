/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-21 20:14:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-21 20:21:55
 */
import { CaretDownOutlined, CaretUpOutlined, CommentOutlined, HeartOutlined, SendOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import React, { CSSProperties, useState } from "react";
import style from './style.css';
import router from "umi/router";

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

export default function(props: any) {
    const [btnStyle, setBtnStyle] = useState(firstCSS);
    const [btntwoStyle, setBtnTwoStyle] = useState(firstCSS);    
    const [starNum, setStarNum] = useState(props.star);
    
    const handleStar = () => {
        if(btnStyle.key === 1) {
            if(btntwoStyle.key === 2)
                setBtnTwoStyle(firstCSS);
            setBtnStyle(secondCSS);
        } else {
            setBtnStyle(firstCSS);
        }
        setStarNum((pre: number) => btnStyle.key===1 ? pre+1 : pre-1);
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

    return (
        <>
        <div className={style.container}>
            <div className={style.avatarContainer}>
               <div className={style.avatar}>

               </div>
               <div className={style.introduction}>
                   <div></div>
                   <div></div>
               </div>
            </div>
            {/* 条件渲染，根据条件选择是否渲染html,存在xss风险 */}
            {props.isHtml
                ? <div className={style.description} dangerouslySetInnerHTML={{ __html: props.description }}></div>
                : <div className={style.description}>{props.description}</div>}
            </div>
            <div className={style.footer} style={{ display: props.showBtn ? 'flex' : 'none' }}>
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
            <Divider />
            </>
    )
}