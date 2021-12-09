/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-09-29 20:18:25
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-10 00:57:08
 */
import { LoginForm, ProFormText, ProFormCaptcha, ProFormCheckbox } from '@ant-design/pro-form';
import {
    UserOutlined,
    MobileOutlined,
    LockOutlined,
    AlipayCircleOutlined,
    TaobaoCircleOutlined,
    WeiboCircleOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import { message, Tabs, Space, notification } from 'antd';
// import type { CSSProperties } from 'react';
import React,{ CSSProperties, useCallback, useState } from 'react';
import router from 'umi/router';
import { login } from '@/request/api/user';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const openNotification = (mes: string) => {
  notification.open({
    message: mes,
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

const handleLogin = (params: any) => {
    login(params).then((res: any) => {
      console.log(res);
      res.code === 200 && router.push('/articles');
      res.code === 400 && openNotification(res.message);
    })
};


export default () => {
  const [loginType, setLoginType] = useState<LoginType>('phone');
  return (
    <div style={{ backgroundColor: '#FDE9C8', height: '100%', position: 'relative'}}>
    <div className="login-container" style={{backgroundColor:'#FED789', border: '2px grey solid',position: 'absolute', right: '10%', width: '40%', top: '10%'}}>
      <LoginForm
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="Github"
        subTitle="全球最大同性交友网站"
        onFinish = {handleLogin}
        actions={
          <Space>
            其他登录方式
            <AlipayCircleOutlined style={iconStyles}></AlipayCircleOutlined>
            <TaobaoCircleOutlined style={iconStyles}></TaobaoCircleOutlined>
            <WeiboCircleOutlined style={iconStyles}></WeiboCircleOutlined>
          </Space>
        }
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
          <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名: admin or user'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: ant.design'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'} />,
              }}
              name="mobile"
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async () => {
                message.success('获取验证码成功！验证码为：1234');
              }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
      </div>
    </div>
  );
};