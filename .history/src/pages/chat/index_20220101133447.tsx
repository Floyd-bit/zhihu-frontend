/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-10 00:49:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-01-01 13:34:47
 */
import React, { useState } from 'react';
import style from './index.css';
import { Input, Collapse, Divider } from 'antd';
import UserList from '../components/userList';
import ReplyBox from './components/replyBox';
import MessageBox from './components/messageBox';

const { Search } = Input;
const { Panel } = Collapse;

const onSearch = (value: string) => console.log(value);

function callback(key: string) {
    console.log(key);
}


const userName = ['知乎小伙伴', '知乎盐选会员', '知乎校园', '知乎汽车', '创作者小助手'];

const ChatComponent:React.FC<{}> = () => {

    const [title, useTitle] = useState('联系人');

    const list = userName.map((i) =>
        <li key={i}><UserList name={i} changeTitle={useTitle} /></li>
    )

    // const selectUser = (e) => {
    //     e.persist();
    //     console.log(e.target.firstChild.innerText);
    // }

    return (
        <div className={style.container}>
            <div className={style.leftColumn}>
                <div className={style.searchBar}>
                    <Search placeholder="搜索联系人" onSearch={onSearch} enterButton />
                </div>
                <div className={style.userList}>
                    <Collapse defaultActiveKey={['recent']} onChange={callback} ghost className={style.collapse}>
                        <Panel header="最近联系" key="recent">
                            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>{list}</ul>
                        </Panel>
                        <Divider />
                        <Panel header="互相关注" key="care">
                            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>{list}</ul>
                        </Panel>
                        <Divider />
                        <Panel header="特别关心" key="especially">
                            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>{list}</ul>
                        </Panel>
                    </Collapse>
                </div>
            </div>
            <div className={style.rightColumn}>
                <div className={style.topBar}>
                    <span style={{ fontSize: '15px', lineHeight: '20px', fontWeight: 'bold' }}>{title}</span>
                </div>
                <div className={style.messageBox}>
                    <MessageBox />
                </div>
                <div className={style.inputBox}>
                    <ReplyBox />
                </div>
            </div>
        </div>
    )
}