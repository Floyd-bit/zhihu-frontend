import { Card, Tabs, List, Row, Col, Pagination, Skeleton } from 'antd';
import { EyeOutlined, VideoCameraOutlined, FireOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons';
import style from './index.css';
import Animal from './components/article/article';
import HotArticle from './components/hotArticle/hotArticle';
import VideoGrid from './components/videoGrid/videoGrid';

import Link from 'umi/link';
import router from 'umi/router';
import React,{ useCallback, useEffect, useState } from 'react';
import { getArticleByPage } from '../../request/api/article';


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

const itemToPath = (item:any) => {
    return item.toString();
}


export default () => {
    const [articles,setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticleByPage({page: currentPage, size: pageSize}).then((res:any) => {
            setArticles(res.result.content);
            setTimeout(()=>{setIsLoading(false)},1000);
            
        })
    }, [currentPage, pageSize]);

    const animalList = articles.map((item:any) => 
        isLoading
        ? <Skeleton active />
        : <Animal key={item.id} title={item.articleTitle} description={item.articleAbstract} id={item.id} isClick={true}/>
    );

    const gridClick = useCallback((e:any) => {
        e.persist();
        switch(e.target.innerText){
            case '写文章':
                router.push('/articles/write');
                break;
            default:
                router.push('/');
        }
    },[]);

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
            <Card bordered={true} style={{ width: '60%' }}>
                <Tabs defaultActiveKey="help">
                    <TabPane
                        tab={<span>
                            <EyeOutlined />
                            关注
                        </span>}
                        key="help"
                    >
                        {animalList}
                        <div style={{margin: '0 auto'}}>
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
                    <Card onClick={gridClick}>
                        <Card.Grid style={{ width: '25%', textAlign: 'center', cursor: 'pointer' }}>
                            回答
                        </Card.Grid>
                        <Card.Grid style={{ width: '25%', textAlign: 'center', cursor: 'pointer' }}>
                            发视频
                        </Card.Grid>
                        <Card.Grid style={{ width: '25%', textAlign: 'center', cursor: 'pointer' }}>
                            写文章
                        </Card.Grid>
                        <Card.Grid style={{ width: '25%', textAlign: 'center', cursor: 'pointer' }}>
                            写想法
                        </Card.Grid>
                    </Card>
                </Card>
                <Card bordered={true} style={{ marginTop: '20px' }}>
                    <List
                        size="small"
                        bordered={false}
                        dataSource={data}
                        renderItem={(item, index) => <Link to={itemToPath(index)}><List.Item className={style.linkItem}>{item}</List.Item></Link>} />
                </Card>
            </div>
        </div>
    </>
    )
}