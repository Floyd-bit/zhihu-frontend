/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-31 17:15:22
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-31 17:36:06
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
    articleAbstract: string,
    articleContentHtml: string,
    articleContentMd: string,
    articleCover: string,
    articleDate: string,
    articleStar: number,
    articleTitle: string
}

interface getAnswerParam {
    size: number,
    page: number
}

export {loginParam, getArticleParam, addArticleParam, getAnswerParam};
