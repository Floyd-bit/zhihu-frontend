/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-09-29 18:40:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-18 16:13:34
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  // 配置less
  theme: {
    "@grey-color": '#F6F6F6'
  },
  // 代理到其他服务器
  proxy: {
    "/api": {
      "target": "",
      "changeOrigin": true,
      "pathRewrite": {"^/api": "/api"}
    },
    "/mock": {
      "target": "",
      "changeOrigin": true,
      "pathRewrite": {"^/mock": ""}
    }
  },
  routes: [
    { path: '/', component: '../pages/user/login/index'},
    {
      path: '/',
      component: '../layouts/index',
      Routes: ['src/pages/components/Authorized/index'],
      routes: [
        { path: '/', component: '../pages/articles/index' },
        { path: '/articles', component: '../pages/articles/index'},
        { path: '/articles/detail', component: '../pages/articles/details/index'},
        { path: '/articles/write', component: '../pages/articles/writeArticle/index'},
        { path: '/articles/video', component: '../pages/articles/videoDetail/index'},
        { path: '/searchResult', component: '../pages/articles/searchResult/index'},
        { path: '/chat', component: '../pages/chat/index'},
        { path: '/explore', component: '../pages/explore/index'},
        { path: '/waiting', component: '../pages/waiting/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      // 路由懒加载
      dynamicImport: true,
      title: '知乎',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
      links: [
        { rel: 'icon', href: '<%= PUBLIC_PATH %>static/icon.png' }
      ]
    }],
  ]
}

export default config;
