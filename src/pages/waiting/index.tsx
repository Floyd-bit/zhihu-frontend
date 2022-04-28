/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-28 22:34:26
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-04-29 00:38:31
 */
import { UserOutlined } from '@ant-design/icons';
import { Button, Card, List, message } from 'antd';
import React, { useCallback, useState, MouseEvent } from 'react';
import CreateDataShow from '../articles/components/createCenter/createDataShow';
import style from './style.css';

import answerPic from '../../assets/answer.png';
import videoPic from '../../assets/video.png';
import articlePic from '../../assets/article.png';
import ideaPic from '../../assets/idea.png';
import livePic from '../../assets/liveIcon.png';
import router from 'umi/router';

const data = [
    '我的收藏',
    '我的关注',
    '我的贴子',
    '帮助中心',
    '联系我们',
];

const Waiting: React.FC<{}> = () => {

    const [currentTab, setCurrentTab] = useState(1);
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

    const changeTab = (e: MouseEvent) => {
        e.persist();
        switch (e.target.innerText) {
            case '为你推荐':
                setCurrentTab(1);
                break;
            case '邀请回答':
                setCurrentTab(2);
                break;
            case '最新问题':
                setCurrentTab(3);
                break;
            case '人气问题':
                setCurrentTab(4);
                break;
        }
    }

    return (
        <div className={style.sitecardborderlesswrapper}>
            <div className={style.contentCard}>
                <div className={style.sticky}>
                    <div className={style.tablist} onClick={changeTab}>
                        <div className={style.tab}>
                            <span className={style.tabtext} style={currentTab === 1 ? { color: '#06f' } : { color: '#444' }}>为你推荐</span>
                        </div>
                        <div className={style.tab}>
                            <span className={style.tabtext} style={currentTab === 2 ? { color: '#06f' } : { color: '#444' }}>邀请回答</span>
                        </div>
                        <div className={style.tab}>
                            <span className={style.tabtext} style={currentTab === 3 ? { color: '#06f' } : { color: '#444' }}>最新问题</span>
                        </div>
                        <div className={style.tab}>
                            <span className={style.tabtext} style={currentTab === 4 ? { color: '#06f' } : { color: '#444' }}>人气问题</span>
                        </div>
                    </div>
                </div>
                <div className={style.questions}>
                    
                </div>
            </div>
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
                    <CreateDataShow />
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
    )
}

export default Waiting;