/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-21 20:35:33
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-31 17:34:16
 */
import { get, post } from '../http';
import { getAnswerParam } from './api';

export const getAnswerByPage = (params: getAnswerParam) => {
    let { size, page } = params;
    return get(`/answer/${size}/${page}`,null)
}