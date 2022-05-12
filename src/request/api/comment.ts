/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-12 15:52:52
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-12 15:57:09
 */
import { get, post } from '../http';
import { addCommentParam } from './api';

export const addComment = (params: addCommentParam) => {
    return post('/api/admin/comment', params);
}

export const getCommentById = (params: number) => {
    return get(`/api/admin/comment/${params}`);
}

export const getCommentByAid = (params: number) => {
    return get(`/api/commentByAid/${params}`);
}