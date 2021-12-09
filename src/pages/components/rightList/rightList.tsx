/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-04 19:17:02
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-14 22:32:59
 */
import { Card, Tabs } from 'antd';
import React from 'react';
const { TabPane } = Tabs;
import './right.css';
import ExpandList from '../expandList/expandList';

export default () => {
    return (
        <div className="card-container">
            <Tabs type="card">
                <TabPane tab="我发布的" key="1">
                    <ExpandList />
                </TabPane>
                <TabPane tab="我参与的" key="2">
                    <ExpandList />
                </TabPane>
                <TabPane tab="我收藏的" key="3">
                    <ExpandList />
                </TabPane>
            </Tabs>
        </div>
    )
}

