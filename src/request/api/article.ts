/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-20 23:24:10
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-13 23:25:30
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

export const searchArticle = (params: string) => {
    return get(`/api/article/search?keywords=${params}`);
}

export const getVideo = () => {
    return get('/mock/video');
}