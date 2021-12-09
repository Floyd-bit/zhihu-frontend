/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-04 19:03:52
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-27 17:12:21
 */
import React from 'react';
import { Progress, Tag, Image, Spin } from 'antd';
import ProList from '@ant-design/pro-list';
import Link from 'umi/link';

export default (props: any) => {

    const data = props.data && props.data.map((item: { name: any; picture: any; area: any;id: number }) => ({
        title: item.name || '动物名称',
        subTitle: <Tag color="#5BD8A6">{item.area.name}</Tag>,
        actions: [<Link to={'/animals/detail?id='+item.id}>详情</Link>],
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
        content: (
            <div
                style={{
                    flex: 1,
                }}
            >
                <Image
                    width={200}
                    height={150}
                    src={item.picture || 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg'}
                />
                <div
                    style={{
                        width: 200,
                    }}
                >
                    <div>受欢迎指数</div>
                    <Progress percent={80} />
                </div>
            </div>
        ),
    }));

    return (
        <Spin spinning={props.isLoading}>
            <ProList<any>
                pagination={{
                    defaultPageSize: 8,
                    showSizeChanger: false,
                }}
                grid={{ gutter: 8, column: props.col }}
                metas={{
                    title: {},
                    subTitle: {},
                    type: {},
                    avatar: {},
                    content: {},
                    actions: {},
                }}
                headerTitle=""
                dataSource={data}
            />
        </Spin>
    );
};