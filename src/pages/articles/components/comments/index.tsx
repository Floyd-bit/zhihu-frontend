/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-28 17:39:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-23 18:19:59
 */
import { Card, Input, message } from 'antd';
import React, {  useCallback, useEffect, useMemo, useState } from 'react';
import { MehTwoTone } from '@ant-design/icons';
import { getCommentByAid } from '@/request/api/comment';
import { getAnswersByAid } from '@/request/api/answer';
import { AnswerRes } from '../../details';
import { resType, commentType, addResType } from '../../type';
import CommentComponent from './commentComponent';
import { tranverseToTree, treeType } from '@/utils/commentTree';
import { dateToString } from '@/utils/time';
import { addComment } from '@/request/api/comment';
import './style.css';

const { Search } = Input;

const Comments: React.FC<{id: number, type: 'question' | 'answer'}> = (props) => {
    const [comment, setComment] = useState<Array<commentType>>([]);
    const [aid, setAid] = useState(0);

    useEffect(() => {
        if(props.type === 'question') {
            getAnswersByAid(props.id).then(res => {
                const result = res as resType<AnswerRes>;
                if(result.result.length) {
                    const answerId = result.result[0].id;
                    setAid(answerId);
                    getCommentByAid(answerId).then(res => {
                        const resl = res as resType<commentType>;
                        setComment(resl.result);
                    })
                }
            })
        } else {
            setAid(props.id);
            getCommentByAid(props.id).then(res => {
                const resl = res as resType<commentType>;
                setComment(resl.result);
            })
        }
    }, []);

    const commentOrReply = useCallback((content: string, pid: number, replyUserId: number) => {
        const newComment:commentType = {
            id: 0,
            content: content,
            createTime: dateToString(new Date()),
            userId: 1,
            answerId: aid,
            pid: pid,
            replyUserId: replyUserId
        };
        console.log(aid);
        setComment((pre: Array<commentType>) => [...pre, newComment]);
        addComment(newComment).then(res => {
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
        })
    }, [comment, aid]);

    const onSearch = useCallback((value: string) => {
        commentOrReply(value, 0, 0);
    }, [aid]);

    const CommentList = useMemo(() => {
        const tree:Array<treeType> = tranverseToTree(comment);
        return tree.map((item: treeType) => {
            return(
                <CommentComponent key={item.id} data={item} addCallback={commentOrReply}>
                    {item.children && item.children.map((item: commentType) => {
                        return (
                            <CommentComponent key={item.id} data={item} addCallback={commentOrReply}>
                            </CommentComponent>
                        )
                    })}
                </CommentComponent>
            )    
        })
    }, [comment]);

    return (
        <Card>
            {CommentList}
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