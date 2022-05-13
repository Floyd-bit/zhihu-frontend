import { Card, Tabs, List, Row, Col, Pagination, Skeleton, message, Button } from 'antd';
import { EyeOutlined, VideoCameraOutlined, FireOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons';
import style from './index.css';
import Animal from './components/article/article';
import HotArticle from './components/hotArticle/hotArticle';
import VideoGrid from './components/videoGrid/videoGrid';
import CreateDataShow from './components/createCenter/createDataShow';
import Comments from './components/comments';

import router from 'umi/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getArticleByPage } from '../../request/api/article';
import answerPic from '../../assets/answer.png';
import videoPic from '../../assets/video.png';
import articlePic from '../../assets/article.png';
import ideaPic from '../../assets/idea.png';
import livePic from '../../assets/liveIcon.png';


const { TabPane } = Tabs;


const mockData = {
    title: '如何看待第 30 届全国中学生生物奥林匹克竞赛萧山中学 11 金 1 银 10 人进国家集训队的成绩？',
    description: '如何看待第 30 届全国中学生生物奥林匹克竞赛萧山中学 11 金 1 银 10 人进国家集训队的成绩？'
};

const data = [
    '我的收藏',
    '我的关注',
    '我的贴子',
    '帮助中心',
    '联系我们',
];

const itemToPath = (item: any) => {
    return item.toString();
}


const ArticleComponent: React.FC<{}> = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const [currentComment, setCurrentComment] = useState(-1);

    useEffect(() => {
        setIsLoading(true);
        getArticleByPage({ page: currentPage, size: pageSize }).then((res: any) => {
            setArticles(res.result.content);
            setTimeout(() => { setIsLoading(false) }, 1000);

        })
    }, [currentPage, pageSize]);

    const showComment = useCallback((id: number) => {
        if(id === currentComment) {
            setCurrentComment(-1);
        } else {
            setCurrentComment(id);
        }
    }, [currentComment]);

    const animalList = useMemo(() => {
        return articles.map((item: any, index: number) =>{
            if(isLoading) {
                return <Skeleton key={index} active />;
            } else if(currentComment === -1 || currentComment !== item.id) {
                return <Animal key={item.id} title={item.articleTitle} description={item.articleAbstract} id={item.id} star={item.articleStar} isClick={true} showBtn={true} showComment={showComment}/>;
            } else {
                return (
                    <>
                    <Animal key={item.id} title={item.articleTitle} description={item.articleAbstract} id={item.id} star={item.articleStar} isClick={true} showBtn={true} showComment={showComment}/>
                    <Comments/>
                    </>
                )
            }
    })}, [currentComment, articles, isLoading]);
    

    const gridClick = useCallback((e: any) => {
        console.log(e.target);
        e.persist();
        switch (e.target.innerText) {
            case '写文章':
                router.push('/articles/write');
                break;
            default:
                message.info('待开发');
        }
    }, []);

    const pageChange = (page: number) => {
        console.log(page);
        setCurrentPage(page);
    };

    const onShowSizeChange = (current: number, pageSize: number) => {
        console.log(current, pageSize);
        setPageSize(pageSize);
    }

    return (
        <><div className={style.sitecardborderlesswrapper}>
            <Card className={style.contentCard} bordered={true}>
                <Tabs className={style.contentTab} defaultActiveKey="help">
                    <TabPane
                        tab={<span>
                            <EyeOutlined />
                            关注
                        </span>}
                        key="help"
                    >
                        {animalList}
                        <div style={{ margin: '0 auto' }}>
                            <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} current={currentPage} total={100} onChange={pageChange} />
                        </div>
                    </TabPane>
                    <TabPane
                        tab={<span>
                            <LikeOutlined />
                            推荐
                        </span>}
                        key="recommend"
                    >
                        {animalList}
                    </TabPane>
                    <TabPane
                        tab={<span>
                            <FireOutlined />
                            热门
                        </span>}
                        key="hot"
                    >
                        <HotArticle title={mockData.title} description={mockData.description} hotNumber={3336} src="https://pic1.zhimg.com/80/v2-1ff047be5330509bb33c34b2f374e7fe_400x224.jpg?source=1940ef5c"></HotArticle>
                    </TabPane>
                    <TabPane
                        tab={<span>
                            <VideoCameraOutlined />
                            视频
                        </span>}
                        key="videos"
                    >
                        <Row gutter={[16, 16]}>
                            <Col span={8}><VideoGrid /></Col>
                            <Col span={8}><VideoGrid /></Col>
                            <Col span={8}><VideoGrid /></Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Card>
            <div className={style.rightColumn}>
                <Card bordered={true}>
                    <div className={style.header}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '40%' }}>
                            <UserOutlined />
                            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>创作中心</span>
                            <span style={{ color: '#5266FF' }}>Lv 1</span></div>
                        <div>
                            <span style={{ color: 'grey' }}>草稿箱</span>
                            <span>(0)</span></div>
                    </div>
                    <div className={style.grid}>
                        <div className={style.gridItem}>
                            <img src={answerPic} style={{ height: '3em', width: '3.5em' }}></img>
                            <div className={style.text} onClick={gridClick}>回答问题</div>
                        </div>
                        <div className={style.gridItem}>
                            <img src={videoPic} style={{ height: '3em', width: '3.5em' }}></img>
                            <div className={style.text} onClick={gridClick}>发视频</div>
                        </div>
                        <div className={style.gridItem}>
                            <img src={articlePic} style={{ height: '3em', width: '3.5em' }}></img>
                            <div className={style.text} onClick={gridClick}>写文章</div>
                        </div>
                        <div className={style.gridItem}>
                            <img src={ideaPic} style={{ height: '3em', width: '3.5em' }}></img>
                            <div className={style.text} onClick={gridClick}>写想法</div>
                        </div>
                    </div>
                    <CreateDataShow/>
                    <Button type="primary" style={{ width: '100%', marginTop: '10px' }} ghost>进入创作中心</Button>
                </Card>
                <Card bordered={true} style={{ marginTop: '10px', padding: '1em' }} onClick={gridClick}>
                    <img src={livePic} style={{ width: '100%' }}></img>
                </Card>
                <div style={{ marginTop: '10px' }}>
                    <img src="https://pic4.zhimg.com/70/v2-0b6fa95cf24cde2384fcc51a1a1b88bb.jpg" style={{ width: '100%' }}></img>
                </div>
                <Card bordered={true} style={{ marginTop: '10px', padding: 0 }}>
                    <List
                        size="small"
                        bordered={false}
                        dataSource={data}
                        renderItem={item => <List.Item className={style.linkItem} onClick={() => message.info('待开发')}>{item}</List.Item>} />
                </Card>
            </div>
        </div>
        </>
    )
}

export default ArticleComponent;