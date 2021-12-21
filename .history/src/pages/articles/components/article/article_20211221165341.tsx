/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-06 23:51:37
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-21 16:53:41
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

    const isClickable = () => {
       props.isClick && router.push(`articles/detail?id=${props.id}`);
    }
    
    const handleStar = () => {
        setBtnStyle((pre) => pre.key===1 ? firstCSS : secondCSS);
    }

    return (
        <div className={style.container}>
            <div className={style.clickable} onClick={isClickable}>
            <div className={style.title}>{props.title}</div>
            {/* 条件渲染，根据条件选择是否渲染html,存在xss风险 */}
            {props.isHtml 
                ? <div className={style.description} dangerouslySetInnerHTML={{__html: props.description}}></div> 
                : <div className={style.description}>{props.description}</div>
            }
            </div>
            <div className={style.footer} style={{display: props.showBtn ? 'flex' : 'none'}}>
                <Button style={{backgroundColor: '#E5EFFF', color:'#0066FF'}} onClick={handleStar}><CaretUpOutlined />
                    <span>赞同</span>
                    <span style={{display: 'inline-block', marginLeft: '0.3em'}}>{props.star}</span>
                </Button>
                <Button style={btnStyle}><CaretDownOutlined /></Button>
                <span><CommentOutlined />评论</span>
                <span><SendOutlined />分享</span>
                <span><StarOutlined />收藏</span>
                <span><HeartOutlined />喜欢</span>
                <span>...</span>
            </div>
            <Divider />
        </div>
    )
}