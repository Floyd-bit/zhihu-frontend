/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-17 23:33:45
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-18 00:35:20
 */
import { commentType } from '@/pages/articles/type';
import { Comment, Avatar } from 'antd';
import React, { ReactNode } from 'react';

const CommentComponent:React.FC<{children: ReactNode, data: commentType}> = (props) => {
    const comment = props.data;
    return (
        <Comment
        actions={[<span key="comment-nested-reply-to">回复</span>]}
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