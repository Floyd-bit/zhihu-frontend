/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-04-28 17:39:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-18 00:30:20
 */
import { Card, Input } from 'antd';
import React, {  useEffect, useMemo, useState } from 'react';
import { MehTwoTone } from '@ant-design/icons';
import { getCommentByAid } from '@/request/api/comment';
import { getAnswersByAid } from '@/request/api/answer';
import { AnswerRes } from '../../details/index';
import { resType, commentType } from '../../type';
import CommentComponent from './commentComponent';
import { tranverseToTree, treeType } from '@/utils/commentTree';
import './style.css';

const { Search } = Input;

const Comments: React.FC<{id: number, type: 'question' | 'answer'}> = (props) => {
    const [comment, setComment] = useState<Array<commentType>>([]);

    useEffect(() => {
        if(props.type === 'question') {
            getAnswersByAid(props.id).then(res => {
                const result = res as resType<AnswerRes>;
                if(result.result.length) {
                    const answerId = result.result[0].id;
                    getCommentByAid(answerId).then(res => {
                        const resl = res as resType<commentType>;
                        setComment(resl.result);
                    })
                }
            })
        } else {
            getCommentByAid(props.id).then(res => {
                const resl = res as resType<commentType>;
                setComment(resl.result);
            })
        }
    }, []);

    const onSearch = (value: string) => {
        console.log(value);
    }

    const CommentList = useMemo(() => {
        const tree:Array<treeType> = tranverseToTree(comment);
        return tree.map((item: treeType) => {
            return(
                <CommentComponent key={item.id} data={item}>
                    {item.children && item.children.map((item: commentType) => {
                        return (
                            <CommentComponent key={item.id} data={item}>
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