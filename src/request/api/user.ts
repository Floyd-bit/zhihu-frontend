/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-20 22:47:43
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-31 17:33:44
 */
import { get, post } from '../http';
import { loginParam } from './api';

export const login = (params: loginParam) => {
    return post('/login',params);
}

export const logout = () => {
    localStorage.removeItem('username');
    return get('/logout',null);
}

export const authentication = () => {
    return get('/authentication',null);
}