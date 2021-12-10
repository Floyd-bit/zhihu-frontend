/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-06 23:51:37
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-10 16:20:48
 */

import { CommentOutlined, HeartOutlined, SendOutlined, StarOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import style from './style.css';
import router from "umi/router";

export default function(props: any) {
    const isClickable = () => {
       props.isClick && router.push(`articles/detail?id=${props.id}`);
    }
    return (
        <div className={style.container} onClick={isClickable}>
            <div className={style.title}>{props.title}</div>
            {/* 条件渲染，根据条件选择是否渲染html,存在xss风险 */}
            {props.isHtml 
                ? <div className={style.description} dangerouslySetInnerHTML={{__html: props.description}}></div> 
                : <div className={style.description}>{props.description}</div>
            }
            <div className={style.footer}>
                <span>赞同</span>
                <span></span>
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