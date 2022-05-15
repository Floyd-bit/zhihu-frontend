/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-15 21:30:27
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-15 21:30:28
 */
export interface resType {
    code: string,
    data: Array<videoType>
}


export interface videoType {
    title: string,
    author: string,
    play: string,
    authorAvatar: string,
    authorDesc: string,
    cover: string,
    hour: string,
    star: number,
    time: string,
    videoUrl: string
}