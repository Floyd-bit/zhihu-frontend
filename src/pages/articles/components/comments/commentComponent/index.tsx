/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-17 23:33:45
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-18 17:33:55
 */
import { commentType } from '@/pages/articles/type';
import { MehTwoTone } from '@ant-design/icons';
import { Comment, Avatar, Input } from 'antd';
import React, { ReactNode, useState } from 'react';

const CommentComponent:React.FC<{children: ReactNode, data: commentType, addCallback: Function}> = (props) => {
    const comment = props.data;
    const {Search} = Input;
    const [isReply, setIsReply] = useState(false);

    const onSearch = (value: string) => {
      const pid = comment.pid ? comment.pid : comment.id;
      const replyUserId = comment.userId;
      props.addCallback(value, pid, replyUserId);
      setIsReply(false);
    }

    const replyArea =
        <Search
        placeholder="写下回复..."
        enterButton="回复"
        size="small"
        suffix={<MehTwoTone />}
        onSearch={onSearch}
        />

    return (
        <Comment
        actions={[isReply ? replyArea : <span key="comment-nested-reply-to" onClick={() => setIsReply(true)}>回复</span>]}
        author={<a>{comment.replyUserId ? `${comment.userId}回复给${comment.replyUserId}`: comment.userId}</a>}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
          <p>{comment.content}</p>
        }
        datetime={comment.createTime}
      >
        {props.children}
      </Comment>
    )
};

export default CommentComponent;