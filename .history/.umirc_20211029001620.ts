/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-09-29 18:40:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-27 17:40:08
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
      "target": "http://localhost:8443",
      "changeOrigin": true,
      "pathRewrite": {"^/api": "/api"}
    }
  },
  routes: [
    { path: '/login', component: '../pages/user/login/index'},
    {
      path: '/',
      component: '../layouts/index',
      Routes: ['src/pages/components/Authorized/index'],
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/animals', component: '../pages/animals/index'},
        { path: '/animals/detail', component: '../pages/animals/details/index' },
        { path: '/articles', component: '../pages/articles/index'},
        { path: '/articles/detail', component: '../pages/articles/details'},
        { path: '/articles/write', component: '../pages/articles/writeArticle/index'},
        { path: '/visibility', component: '../pages/visibility/index'},
        { path: '/visibility/camera', component: '../pages/visibility/camera/index' },
        { path: '/chat', component: '../pages/chat/index'}
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
      title: 'AIU',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
