/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-20 23:24:10
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-29 00:10:03
 */
import { get, post } from '../http';

export interface articleType {
    articleAbstract: string,
    articleContentHtml: string,
    articleContentMd: string,
    articleCover: string,
    articleDate: string,
    articleTitle: string
}

export const getArticleByPage = (params: any) => {
    let { size, page } = params;
    return get(`/article/${size}/${page}`,null)
}

export const getArticleById = (params: number) => {
    return get(`/article/${params}`,null);
}

export const addArticle = (params: any) => {
    return post('/admin/content/article',params);
}