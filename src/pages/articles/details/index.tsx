/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-10 00:49:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-28 23:50:10
 */
import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button } from 'antd';
import style from './index.css';
import Article from '../components/article/article';
import Answer, { primaryUser } from '../components/answers/index';
import UserInfo from '../components/userInfo/index';
import { getArticleById } from '../../../request/api/article';
import { getAnswerByPage } from '../../../request/api/answer';
import { addArticleParam } from '@/request/api/api';
import { UserInfoRes } from '../components/userInfo/index';
import { getUserInfo } from '@/request/api/user';

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

const AticleDetail: React.FC<{}> = () => {
    const [data, setData] = useState<addArticleParam>(primaryAnswer);
    const [answer, setAnswer] = useState<Array<AnswerRes>>([]);
    const [user, setUser] = useState<UserInfoRes>(primaryUser);

    const parmas = window.location.search;
    const id = parmas.split('=')[1];
    
    useEffect(() => {
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

    useEffect(() => {
        filterRes.length && getUserInfo(filterRes[0]?.user ?? 1).then((res: any) => {
            setUser(res.data);
        })
    }, [answer]);

    const filterRes = answer.filter((item: AnswerRes) => item.aid === data?.id);

    const answerList = filterRes.map((item: AnswerRes) =>
        <Answer key={item.id} id={item.id} description={item.content} date={item.date} avatar="https://pic1.zhimg.com/v2-7b800df37614e70e7d2291aec2fed60a_xs.jpg?source=1940ef5c" star={5} user={item.user}/>
    )

    return (
        <div className={style.container}>
            <div className={style.topContainer}>
                <Card className={style.mobile} style={{ width: '100%', padding: '0 10%' }} bodyStyle={{ display: 'flex', justifyContent: 'space-around' }}>
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
                            <UserInfo username={user.username} description={user.description} avatar={user.avatar} answer={user.answer} article={user.article} subscriber={user.subscriber}/>
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

export default AticleDetail;