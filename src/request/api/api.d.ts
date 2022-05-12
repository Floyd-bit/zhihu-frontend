/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-31 17:15:22
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-12 15:55:03
 */
interface loginParam {
    username: string,
    password: string
}

interface getArticleParam {
    size: number,
    page: number
}

interface addArticleParam {
    id?: number,
    articleAbstract: string,
    articleContentHtml: string,
    articleContentMd: string,
    articleCover: string,
    articleDate: string,
    articleStar?: number,
    articleTitle: string
}

interface getAnswerParam {
    size: number,
    page: number
}

interface addAnswerParam {
    aid: number,
    content: string,
    data: string,
    user: number
}

interface addCommentParam {
    answerId: number,
    content: string,
    createTime: string,
    pid: number,
    replyUserId: number,
    userId: number
}

export {loginParam, getArticleParam, addArticleParam, getAnswerParam, addAnswerParam, addCommentParam};
