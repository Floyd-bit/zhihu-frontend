import React from 'react';
import { Comment, Avatar } from 'antd';
import style from './style.css';

export default () => {

    const actions: React.ReactNode[] | undefined = [];

    return (
        <div className={style.container}>
            <div className={style.time}>
                08-09 17:34
            </div>
            <Comment
                actions={actions}
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                author={<a>Han Solo</a>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p style={{display: 'inline-block', borderRadius: '10px', background: '#F6F6F6', padding:'10px'}}>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                }
            />
        </div>
    );
};