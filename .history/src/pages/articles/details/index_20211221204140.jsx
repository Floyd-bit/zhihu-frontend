import React,{ useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import style from './index.css';
import Article from '../components/article/article';
import Answer from '../components/answers/index';
import { getArticleById } from '../../../request/api/article';
import { getAnswerByPage } from '../../../request/api/answer';

// const mockData = {
//     title: '如何看待第 30 届全国中学生生物奥林匹克竞赛萧山中学 11 金 1 银 10 人进国家集训队的成绩？',
//     description: '如何看待第 30 届全国中学生生物奥林匹克竞赛萧山中学 11 金 1 银 10 人进国家集训队的成绩？'
// };

const { Meta } = Card;


export default () => {
    const [data, setData] = useState({});
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        let parmas = window.location.search;
        let id = parmas.split('=');
        getArticleById(id[1]).then((res) => {
            setData(res.result);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        getAnswerByPage(5,1).then((res) => {
            setAnswer(res.result.content);
        })
    }, []);

    const answerList = answer.map((item) =>
        <Answer description={item.content}  />
    )

    return (
        <div className={style.container}>
            <div className={style.topContainer}>
                <Card style={{ width: '100%', padding: '0 10%' }} bodyStyle={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '80%' }}>
                        <Article title={data.articleTitle} description={data.articleContentHtml} isHtml={true} showBtn={false}/>
                        <div>
                            <Button type="primary" style={{ marginRight: '20px' }}>关注帖子</Button>
                            <Button type="primary" ghost style={{ marginRight: '20px' }}>
                                回帖
                            </Button>
                            <Button type="dashed" danger>联系TA</Button>
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
                    <Answer description="<p>asdasd</p>" avatar="https://pic1.zhimg.com/v2-7b800df37614e70e7d2291aec2fed60a_xs.jpg?source=1940ef5c" star={5}/>
                </div>
                <div className={style.rightList}>
                    <div className={style.about}>
                        <Card
                            hoverable
                            bordered={true}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
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