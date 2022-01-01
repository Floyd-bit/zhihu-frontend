/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-12-10 00:49:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-01-01 13:33:44
 */
import React from 'react';
import { Avatar } from 'antd';
import style from './index.css';

interface UserListProp {
    name: string,
    changeTitle: (name: string) => void
}

const UserListComponent: React.FC<UserListProp> = (props) => {

    const change = () => {
        props.changeTitle(props.name);
    }

    return(
        <div className={style.container} onClick={change}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <div className={style.userInfo}>
                <div className={style.topInfo}>
                    <span style={{fontSize: '1rem'}}>{props.name}</span>
                    <span style={{float: 'right',color:'grey'}}>14小时前</span>
                </div>
                <div className={style.downInfo}>
                    亲爱的 Floyd 你好：知乎开学送好礼！
                </div>
            </div>
        </div>
    )
}

export default UserListComponent;