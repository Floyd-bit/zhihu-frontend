/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-20 22:47:43
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-23 22:26:40
 */
import { get, post } from '../http';
import { loginParam } from './api';

export const login = (params: loginParam) => {
    return post('/api/login',params);
}

export const logout = () => {
    sessionStorage.removeItem('username');
    return get('/api/logout');
}

export const authentication = () => {
    return get('/api/authentication');
}

export const getUserInfo = (id: number) => {
    return get(`/mock/user/${id}`);
}