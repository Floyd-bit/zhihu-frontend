/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-24 23:18:11
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-23 22:27:41
 */
import React, { useEffect, useState } from 'react';
import Redirect from 'umi/redirect';
import { notification } from 'antd';
import { authentication } from '@/request/api/user';

const openNotification = (mes: string, des: string) => {
  notification.open({
    message: mes,
    description: des,
  });
};

const AuthRouter =  (props:any) => {
  const [isLogin,setIsLogin] = useState(true);
  useEffect(() => {
    authentication().then(res => {
        // openNotification('登录成功 √','欢迎来到知乎 🎉🎉🎉');
        if(sessionStorage.getItem('username')) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
    },
    err => {
        openNotification('请先登录','Please sign in first');
        setIsLogin(false);
    })
  },[])

  return (
     isLogin ? <div>{props.children}</div> : <Redirect to="/" />
  )
}

export default AuthRouter;
