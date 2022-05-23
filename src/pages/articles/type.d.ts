/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-13 23:19:22
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-23 16:40:52
 */
export interface resType<T> {
    code: number,
    message: string,
    result: Array<T>
}

export interface resIdType<T> {
    code: number,
    message: string,
    result: T
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

export interface commentType {
    id: number,
    content: string,
    createTime: string,
    userId: number,
    answerId: number,
    pid: number,
    replyUserId: number
}

export interface addResType {
    [propname: string]: string
}
