/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-13 23:19:22
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-13 23:27:36
 */
export interface resType<T> {
    code: number,
    message: string,
    result: Array<T>
}

export interface articleType {
    id: number,
    articleTitle: string,
    articleContentHtml: string | null,
    articleContentMd: string | null,
    articleAbstract: string,
    articleCover: string | null,
    articleDate: string,
    articleStar: number
}