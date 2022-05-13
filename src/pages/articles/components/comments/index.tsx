/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-28 17:39:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-13 22:33:58
 */
import { Comment, Tooltip, List, Card, Input } from 'antd';
import moment from 'moment';
import React, { createElement, useState } from 'react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled, MehTwoTone } from '@ant-design/icons';
import './style.css';

const { Search } = Input;

const Comments: React.FC<{}> = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState('');

    const onSearch = (value: string) => console.log(value);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">回复</span>,
    ];

    const data = [
        {
            actions: [actions],
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            actions: [actions],
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
    ];

    return (
        <Card>
            <List
                className="comment-list"
                header={`${data.length}条评论`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <li key={index}>
                        <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        >
                            <Comment
                                actions={item.actions}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                            />
                        </Comment>
                    </li>
                )}
            />
            <Search
                placeholder="写下你的评论..."
                enterButton="发布"
                size="middle"
                suffix={<MehTwoTone />}
                onSearch={onSearch}
            />
        </Card>
    )
};

export default Comments;