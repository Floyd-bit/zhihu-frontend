/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-10 20:21:35
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-10 20:21:36
 */
import React from 'react';
import { Button, Tag } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import ProList from '@ant-design/pro-list';

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const dataSource = [
  {
    title: '语雀的天空',
  },
  {
    title: 'Ant Design',
  },
  {
    title: '蚂蚁金服体验科技',
  },
  {
    title: 'TechUI',
  },
];

export default () => {
  return (
    <ProList<{ title: string }>
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            查看全部
          </Button>,
        ];
      }}
      itemLayout="vertical"
      rowKey="id"
      headerTitle="回复"
      dataSource={dataSource}
      metas={{
        title: {},
        description: {
          render: () => (
            <>
              <Tag>语雀专栏</Tag>
              <Tag>设计语言</Tag>
              <Tag>蚂蚁金服</Tag>
            </>
          ),
        },
        actions: {
          render: () => [
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ],
        },
        extra: {
          render: () => (
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          ),
        },
        content: {
          render: () => {
            return (
              <div>
                段落示意：蚂蚁金服设计平台
                design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
              </div>
            );
          },
        },
      }}
    />
  );
};