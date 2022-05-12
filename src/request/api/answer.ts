/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-21 20:35:33
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-12 15:52:22
 */
import { get, post } from '../http';
import { getAnswerParam, addAnswerParam } from './api';

export const getAnswerByPage = (params: getAnswerParam) => {
    let { size, page } = params;
    return get(`/api/answer/${size}/${page}`,null)
}

export const addAnswer = (params: addAnswerParam) => {
    return post('/api/admin/answer', params);
}

export const getAnswersByAid = (params: number) => {
    return get(`/api/answerByAid/${params}`);
}