/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-12 15:39:57
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-12 15:45:49
 */
import { get } from "../http";

export const getExplorecolumn = () => {
    return get('/mock/explorecolumn');
}

export const getRoundTable = () => {
    return get('/mock/roundtable');
}

export const getExploreSpecial = () => {
    return get('/mock/explorespecial');
}