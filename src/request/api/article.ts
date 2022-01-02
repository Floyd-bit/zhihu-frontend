/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-20 23:24:10
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-01-02 15:27:22
 */
import { get, post } from '../http';
import { getArticleParam, addArticleParam } from './api';

export const getArticleByPage = (params: getArticleParam) => {
    let { size, page } = params;
    return get(`/api/article/${size}/${page}`,null)
}

export const getArticleById = (params: number) => {
    return get(`/api/article/${params}`,null);
}

export const addArticle = (params: addArticleParam) => {
    return post('/api/admin/content/article',params);
}