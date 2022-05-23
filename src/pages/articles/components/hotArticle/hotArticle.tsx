/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-08 20:21:46
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-23 18:10:30
 */
import { SendOutlined, FireOutlined } from "@ant-design/icons";
import { Divider, Image } from "antd";
import React from "react";
import { articleType } from "../../type";
import style from './hotArticle.css';
import { QuestionSort } from '@/utils/question';
import Link from "umi/link";

const HotArticle:React.FC<{data: Array<articleType>}> = (props) => {

    const hotData = QuestionSort(props.data);

    const HotArticleItem = (props: {data: articleType, index: number}) => {
        const data = props.data;
        return (
            <Link to={`/articles/detail?id=${data.id}`} style={{color: 'black'}}>
            <div className={style.container}>
                <div className={style.indexNumber}>{props.index + 1}</div>
                <div className={style.text}>
                    <div className={style.title}>{data.articleTitle}</div>
                    <div className={style.description}>{data.articleAbstract}</div>
                    <div className={style.footer}>
                        <span><FireOutlined />{data.articleStar+'热度'}</span>
                        <span><SendOutlined />分享</span>
                    </div>
                </div>
                <div className={style.picture}>
                    <Image
                        width="100%"
                        src={data.articleCover}
                    />
                </div>
            </div>
            </Link>
        )
    };

    const HotArticleList = hotData.map((item: articleType, index: number) => {
        return (
            <><HotArticleItem data={item} key={item.id} index={index}/><Divider /></>
        )
    })

    return (
        <>{HotArticleList}</>
    );
}

export default React.memo(HotArticle);