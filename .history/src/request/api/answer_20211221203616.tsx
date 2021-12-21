/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-21 20:35:33
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-21 20:35:33
 */
import { get, post } from '../http';

export const getAnswerByPage = (params: any) => {
    let { size, page } = params;
    return get(`/answer/${size}/${page}`,null)
}