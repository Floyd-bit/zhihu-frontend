/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-24 23:18:11
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-26 22:19:13
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
        openNotification('登录成功 √','欢迎来到AIU 🎉🎉🎉');
        setIsLogin(true);
    },
    err => {
        openNotification('请先登录','Please sign in first');
        setIsLogin(false);
    })
  },[])

  return (
     isLogin ? <div>{props.children}</div> : <Redirect to="/login" />
  )
}

export default AuthRouter;
