import React from 'react';
import { Input, Button } from 'antd';
import { SmileOutlined, PictureOutlined } from '@ant-design/icons';

import style from './index.css';

export default () => {
    return (
        <div className={style.container}>
            <div className={style.toolBar}>
                <ul style={{margin:0,boxSizing: 'border-box',overflow:'hidden',padding: '9px 10px 0 20px'}}>
                    <li className={style.li}>
                        <SmileOutlined style={{fontSize: '1.2rem'}}/>
                    </li>
                    <li className={style.li}>
                        <PictureOutlined style={{fontSize: '1.2rem'}}/>
                    </li>
                </ul>
            </div>
            <Input placeholder="输入文字" bordered={false} style={{height: '58%'}}/>
            <div>
                <div className={style.submitArea}>
                    <span style={{display: 'inline-flex', marginRight: '10px', color:"grey"}}>按Enter键发送</span>
                    <Button type="primary" shape="round">发送</Button>
                </div>
                
            </div>
        </div>
    )
}