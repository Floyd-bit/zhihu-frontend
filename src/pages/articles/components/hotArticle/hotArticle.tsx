/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-08 20:21:46
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-08 20:42:59
 */
import { CommentOutlined, SendOutlined, FireOutlined } from "@ant-design/icons";
import { Divider, Image } from "antd";
import React from "react";
import style from './hotArticle.css';


export default function (props: any) {
    return (
        <>
            <div className={style.container}>
                <div className={style.indexNumber}>1</div>
                <div className={style.text}>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.description}>{props.description}</div>
                    <div className={style.footer}>
                        <span><FireOutlined />{props.hotNumber+'热度'}</span>
                        <span><SendOutlined />分享</span>
                    </div>
                </div>
                <div className={style.picture}>
                    <Image
                        width="100%"
                        src={props.src}
                    />
                </div>
            </div>
            <Divider />
        </>
    )
}