/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-15 20:10:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-15 21:53:29
 */
import {Row, Col, Skeleton} from 'antd';
import React, { useEffect, useState } from 'react';
import VideoGrid from './videoGrid';
import { getVideo } from '@/request/api/article';
import { resType, videoType } from './type';

const VideoComponent: React.FC<{}> = () => {
    const [videoData, setVideoData] = useState<resType>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getVideo().then(res => {
            setVideoData(res as resType);
            setLoading(false);
        })
    }, []);

    const VideoList = videoData?.data.map((item: videoType, index: number) => loading? <Skeleton key={index}/>: <Col key={index} span={8}><VideoGrid data={item}/></Col>)

    return (
        <Row gutter={[16, 16]}>
            {VideoList}
        </Row>
    )
}

export default VideoComponent;