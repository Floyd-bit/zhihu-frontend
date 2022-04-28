/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-06 23:51:37
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-28 23:51:32
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

export default function(props: articleProps) {
    const [btnStyle, setBtnStyle] = useState(firstCSS);
    const [btntwoStyle, setBtnTwoStyle] = useState(firstCSS);    
    const [starNum, setStarNum] = useState(props.star);
    const [starState, setStarState] = useState<starStateType>({isStar: false, isFavoriate: false});

    const isClickable = () => {
       props.isClick && router.push(`articles/detail?id=${props.id}`);
    }
    
    const handleStar = () => {
        if(btnStyle.key === 1) {
            if(btntwoStyle.key === 2)
                setBtnTwoStyle(firstCSS);
            setBtnStyle(secondCSS);
        } else {
            setBtnStyle(firstCSS);
        }
        setStarNum((pre: number|undefined) => pre && (btnStyle.key===1 ? pre+1 : pre-1));
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

    const comment = () => {
        props.showComment && props.showComment(props.id);
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
                <Button style={btnStyle.css} onClick={handleStar}><CaretUpOutlined />
                    <span>赞同</span>
                    <span style={{display: 'inline-block', marginLeft: '0.3em'}}>{starNum}</span>
                </Button>
                <Button style={btntwoStyle.css} onClick={handleOppose}><CaretDownOutlined /></Button>
                <span className={style.mobile} onClick={comment}><CommentOutlined />评论</span>
                <span className={style.mobile}><SendOutlined />分享</span>
                <span className={style.mobile} onClick={changeFavoriateState}><StarOutlined style={starState.isFavoriate ? {color: 'orange'} : {}}/>收藏</span>
                <span className={style.mobile} onClick={changeStarState}><HeartOutlined style={starState.isStar ? {color: 'red'} : {}}/>喜欢</span>
                <span className={style.mobile}>...</span>
            </div>
            <Divider />
        </div>
    )
}