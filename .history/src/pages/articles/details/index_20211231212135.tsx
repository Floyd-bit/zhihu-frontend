/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-10 00:49:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-31 21:20:46
 */
import React, { useState, useEffect } from 'react';
import { Card, Button, Avatar } from 'antd';
import style from './index.css';
import Article from '../components/article/article';
import Answer from '../components/answers/index';
import { getArticleById } from '../../../request/api/article';
import { getAnswerByPage } from '../../../request/api/answer';
import { addArticleParam } from '@/request/api/api';

interface AnswerRes {
    id: number,
    aid: number,
    content: string,
    user: number,
    date: string
}

const primaryAnswer = {
    id: 0,
    aid: 0,
    content: '内容',
    user: 1,
    date: '1999-0-1',
    articleAbstract: '', 
    articleContentHtml: '',
    articleContentMd: '',
    articleCover: '',
    articleDate: '', 
    articleTitle: ''
}

export default () => {
    const [data, setData] = useState<addArticleParam>(primaryAnswer);
    const [answer, setAnswer] = useState<Array<AnswerRes>>([]);

    useEffect(() => {
        let parmas = window.location.search;
        let id = parmas.split('=')[1];
        getArticleById(parseInt(id)).then((res: any) => {
            setData(res.result);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getAnswerByPage({ size: 5, page: 1 }).then((res: any) => {
            setAnswer(res.result.content);
        })
    }, []);


    const filterRes = answer.filter((item: AnswerRes) => item.aid === data?.id);

    const answerList = filterRes.map((item: AnswerRes) =>
        <Answer key={item.id} description={item.content} date={item.date} avatar="https://pic1.zhimg.com/v2-7b800df37614e70e7d2291aec2fed60a_xs.jpg?source=1940ef5c" star={5} />
    )

    return (
        <div className={style.container}>
            <div className={style.topContainer}>
                <Card style={{ width: '100%', padding: '0 10%' }} bodyStyle={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '80%' }}>
                        <Article title={data.articleTitle} description={data.articleContentHtml} isHtml={true} showBtn={false} />
                        <div>
                            <Button type="primary" style={{ marginRight: '20px' }}>关注帖子</Button>
                            <Button type="primary" ghost style={{ marginRight: '20px' }}>
                                写回答
                            </Button>
                            <Button type="dashed" danger>邀请回答</Button>
                        </div>
                    </div>
                    <div className={style.viewNumber}>
                        <div className={style.view}>
                            <div style={{ color: 'grey' }}>关注者</div>
                            <div style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold' }}>656</div>
                        </div>
                        <div className={style.view}>
                            <div style={{ color: 'grey' }}>被浏览</div>
                            <div style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold' }}>1,438</div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className={style.bottomContainer}>
                <div className={style.articleList}>
                    {answerList}
                </div>
                <div className={style.rightList}>
                    <div className={style.about}>
                        <Card
                            hoverable
                            bordered={true}
                        >
                            <div className={style.avatarContainer}>
                                <div className={style.avatar}>
                                    <Avatar shape="square" size="large" src="https://pic1.zhimg.com/v2-7b800df37614e70e7d2291aec2fed60a_xs.jpg?source=1940ef5c" />
                                </div>
                                <div className={style.introduction}>
                                    <div style={{ fontWeight: 'bold' }}>徐睿</div>
                                    <div>有事可私信</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={style.recommand}>
                        <Card title="相关帖子" bordered={true}>

                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}