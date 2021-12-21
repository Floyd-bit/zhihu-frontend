/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-09-29 18:40:13
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-12-21 20:03:12
 */
import React from 'react';
import styles from './index.css';
import { Layout, Menu, Avatar, Popover, Dropdown, Input } from 'antd';
import { IconFont } from '@/icons';
import { BarsOutlined, BellOutlined, ContainerOutlined, ExportOutlined, LineChartOutlined, MessageOutlined, RobotOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'umi/link';
import router from 'umi/router';
import UserList from '@/pages/components/userList';
import { logout } from '@/request/api/user';

const { Header, Content, Footer } = Layout;

const { Search } = Input;

const noticeList = [
  '知乎小伙伴',
  '知乎盐选会员',
  '知乎校园',
  '知乎汽车',
  '创作者小助手'
];

const change = (title: any) => {
  console.log(title);
}

const onSearch = (value: string) => console.log(value);

const  menuItem = noticeList.map((i)=>
  <Menu.Item key={i}>
    <UserList name={i} changeTitle={change}/>
  </Menu.Item>
)

const menu = (
  <Menu>
    {menuItem}
  </Menu>
);

const downContent = (
  <>
    <Link to="/">
      <p>
      <SettingOutlined />
        个人设置
      </p>
    </Link>
    <Link to="/" onClick={logout}>
      <p>
       <ExportOutlined />
        退出登录
      </p>
    </Link>
  </>
)

const handleClick = (e: { key: any; }) => {
  switch(e.key) {
    case 'frontpage-menu': 
      router.push('/articles');
      break;
    // case 'animals-menu':
    //   router.push('/animals');
    //   break;
    // case 'info-menu':
    //   router.push('/articles');
    //   break;
    // case 'smart-menu': 
    //   router.push('/visibility');
    //   break;
  }
}

const BasicLayout: React.FC = props => {
  // 登录布局
  if (props.location.pathname === '/') {
    return <div style={{ height: '100vh' }}>{props.children}</div>
  }

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 999, width: '100%', backgroundColor: 'white' }}>
        <div style={{ float: 'left', color: '#0066FF', fontSize: '1.8rem', marginRight: '50px' }}>
          知乎
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['frontpage-menu']} onClick={handleClick}>
          <Menu.Item key="frontpage-menu" icon={<BarsOutlined />}>首页</Menu.Item>
          <Menu.Item key="animals-menu" icon={<RobotOutlined />}>会员</Menu.Item>
          <Menu.Item key="info-menu" icon={<ContainerOutlined />}>发现</Menu.Item>
          <Menu.Item key="smart-menu" icon={<LineChartOutlined />}>等你来答</Menu.Item>
        </Menu>
        <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width: 200}}/>
        <Link to="/chat">
        <div className={styles.message}>
          <MessageOutlined style={{fontSize: '1.2rem', color: 'black'}}/>
        </div>
        </Link>
        <Dropdown overlay={menu} placement="bottomCenter">
          <div className={styles.notice}>
            <BellOutlined style={{fontSize: '1.2rem', color: 'black'}}/>
          </div>
        </Dropdown>
        <div style={{ position: 'absolute', color: 'white', right: '25px', top: '-4px' }}>
          <Popover content={downContent} placement="bottom">
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              {localStorage.getItem('username')?.charAt(0)}
            </Avatar>
            <span style={{ display: 'inline-block', marginLeft: '10px' }}>Floyd</span>
          </Popover>
        </div>
      </Header>
      <Content className={styles.sitelayout} style={{ padding: '0 20px', marginTop: 64 }}>
        <div className={styles.sitelayoutbackground} style={{ padding: 0, minHeight: 380 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ZHIHU ©2021 Created by 你说的都对</Footer>
    </Layout>
  );
};

export default BasicLayout;
