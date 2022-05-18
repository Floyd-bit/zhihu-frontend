/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-10 00:49:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-18 18:09:51
 */
import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button, Skeleton, message } from 'antd';
import style from './index.css';
import Article from '../components/article/article';
import Answer, { primaryUser } from '../components/answers/index';
import UserInfo from '../components/userInfo/index';
import RelatedQuestions from './relatedQuestions/index';
import { getArticleById } from '../../../request/api/article';
import { getAnswersByAid, addAnswer } from '../../../request/api/answer';
import { addAnswerParam } from '@/request/api/api';
import { addArticleParam } from '@/request/api/api';
import { UserInfoRes } from '../components/userInfo/index';
import { getUserInfo } from '@/request/api/user';
import { dateToString } from '@/utils/time';
import { addResType } from '../type';

export interface AnswerRes {
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

const AddAnswerComponent = React.lazy(() => import('./addAnswer/index'));

const AticleDetail: React.FC<{}> = () => {
    const [data, setData] = useState<addArticleParam>(primaryAnswer);
    const [answer, setAnswer] = useState<Array<AnswerRes>>([]);
    const [user, setUser] = useState<UserInfoRes>(primaryUser);
    const [isAddShow, setIsAddShow] = useState(false);

    const parmas = window.location.search;
    const id = parmas.split('=')[1];
    
    useEffect(() => {
        getArticleById(parseInt(id)).then((res: any) => {
            setData(res.result);
        });
        getAnswersByAid(parseInt(id)).then((res: any) => {
            setAnswer(res.result);
            const userId = res.result.length ? res.result[0].user : 1;
            getUserInfo(userId).then((res: any) => {
                setUser(res);
            })
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const answerList = answer.map((item: AnswerRes) =>
        <Answer key={item.id} id={item.id} description={item.content} date={item.date} avatar="https://pic1.zhimg.com/v2-7b800df37614e70e7d2291aec2fed60a_xs.jpg?source=1940ef5c" star={5} user={item.user}/>
    )

    const closeAddComponent = useCallback(() => {
        setIsAddShow(false);
    }, []);

    const fetchAddAnswer = useCallback((content: string) => {
        const addParams: addAnswerParam = {
            aid: data.id || 1,
            content: content,
            date: dateToString(new Date()),
            user: 1
        };
        setAnswer(pre => [{...addParams, id: 0}, ...pre]);
        addAnswer(addParams).then((res) => {
            const result = res as addResType;
            if(result.message === '成功') {
                message.success({
                    content: result.result,
                    className: 'success-class',
                    style: {
                        marginTop: '8vh',
                    },
                });
            }
        });
    }, [data]);

    return (
        <div className={style.container}>
            <div className={style.topContainer}>
                <Card className={style.mobile} style={{ width: '100%', padding: '0 10%' }} bodyStyle={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '80%' }}>
                        <Article title={data.articleTitle} description={data.articleContentHtml} isHtml={true} showBtn={false} />
                        <div>
                            <Button type="primary" style={{ marginRight: '20px' }}>关注帖子</Button>
                            <Button type="primary" ghost style={{ marginRight: '20px' }} onClick={() => setIsAddShow(pre => !pre)}>
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
            {
                isAddShow &&
                <div className={style.editorContainer}>
                    <React.Suspense fallback={<Skeleton active></Skeleton>}>
                        <AddAnswerComponent closeAddComponent={closeAddComponent} fetchAddAnswer={fetchAddAnswer}/>
                    </React.Suspense>
                </div>
            }
            <div className={style.bottomContainer}>
                <div className={style.articleList}>
                    {answerList}
                </div>
                <div className={style.rightList}>
                    <div style={{ margin: '10px 0' }}>
                        <img src="https://pic3.zhimg.com/v2-d8e6003f9851149f05fb17c80c94d28f_720w.jpg?source=d6434cab" style={{ width: '100%' }}></img>
                    </div>
                    <div className={style.about}>
                        <Card
                            hoverable
                            bordered={true}
                        >
                            <UserInfo username={user.username} description={user.description} avatar={user.avatar} answer={user.answer} article={user.article} subscriber={user.subscriber}/>
                        </Card>
                    </div>
                    <div className={style.recommand}>
                        <Card title="相关问题" bordered={true}>
                            <RelatedQuestions/>
                        </Card>
                    </div>
                    <div style={{ margin: '10px 0' }}>
                        <img src="https://pic2.zhimg.com/v2-831b4c2de9342a819ee5ed6cbf52b722_720w.jpg?source=d6434cab" style={{ width: '100%' }}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AticleDetail;