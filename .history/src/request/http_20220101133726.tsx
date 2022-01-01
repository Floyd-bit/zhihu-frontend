/*
 * @Description: 封装axios
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-14 23:14:39
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-24 23:09:24
 */
import axios from 'axios';
// import QS from 'qs'; 序列化Post类型的参数
import router from 'umi/router';
import { Button, notification } from 'antd';
import { FrownTwoTone } from '@ant-design/icons';
import React from 'react';

// 环境的切换
if (process.env.NODE_ENV === 'development') {    
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = '/api';
} 
else if (process.env.NODE_ENV === 'debug') { 
    axios.defaults.withCredentials = true;   
    axios.defaults.baseURL = '/api';
} 
else if (process.env.NODE_ENV === 'production') {    
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = '/api';
}

// 设置超时时间
axios.defaults.timeout = 10000;

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
axios.interceptors.request.use(
    config => {
        // 判断token
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 错误提醒
const openNotification = (mes: String, des: String) => {
    notification.open({
      message: mes,
      description: des,
      icon: <FrownTwoTone style={{ color: 'red' }} />,
    });
  };

// 响应拦截
axios.interceptors.response.use(
    response => {
        // 判断状态码
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401 未登录
                case 401:
                    router.replace({
                        // 重定向到登录页
                        pathname: '/login',
                        query: {
                            redirect: window.location.href
                        }
                    });
                    break;
                // token过期
                case 403:
                    // 清除localStorage中存储的token
                    router.replace({
                        // 重定向到登录页
                        pathname: '/login',
                        query: {
                            redirect: window.location.href
                        }
                    });
                    break;
                case 404:
                    openNotification('404','Not Found');
                    break;
                default:
                    openNotification('Error','请求失败');
            }
        }
    }
)

// 封装get方法
export function get(url: string, params: any) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

// 封装post方法
export function post(url: string, params: any) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.data);
        })
    });
}