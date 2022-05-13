/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-09 00:42:37
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-13 23:43:35
 */
import { FireTwoTone } from "@ant-design/icons";
import { Card, Empty, Pagination, Skeleton } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Animal from '../components/article/article';
import Comments from "../components/comments";
import styles from "./index.css";
import { searchArticle } from "@/request/api/article";
import { resType, articleType } from "../type";  

const SearchResult: React.FC<{}> = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentComment, setCurrentComment] = useState(-1);
    const searchData = [1,2,3,4,5];
    
    const param = window.location.search.split('=')[1];

    useEffect(() => {
        const keyword = decodeURI(param);
        setIsLoading(true);
        searchArticle(keyword).then((res: resType<articleType> | any) => {
            setArticles(res.result);
            setTimeout(() => { setIsLoading(false) }, 1000);
        })
    }, [param]);

    const showComment = useCallback((id: number) => {
        if(id === currentComment) {
            setCurrentComment(-1);
        } else {
            setCurrentComment(id);
        }
    }, [currentComment]);

    const animalList = useMemo(() => {
        if (isLoading) {
            return <Skeleton active />;
        }
        if(!articles.length) {
            return <Empty description={<span>暂无搜索结果</span>}/>
        }
        return articles.map((item: articleType, index: number) => {
            if (currentComment === -1 || currentComment !== item.id) {
                return <Animal key={item.id} title={item.articleTitle} description={item.articleAbstract} id={item.id} star={item.articleStar} isClick={true} showBtn={true} showComment={showComment} />
            } else {
                return (
                    <>
                    <Card>
                        <Animal key={item.id} title={item.articleTitle} description={item.articleAbstract} id={item.id} star={item.articleStar} isClick={true} showBtn={true} showComment={showComment} />
                        <Comments />
                    </Card>
                    </>
                )
            }
        })
    }, [currentComment, articles, isLoading]);

    const SearchItem = () => {
        return (
            <div className={styles.searchItem}>
                <div className={styles.searchItemLink}>
                    <span className={styles.itemText}>
                        俄军与亚速钢铁厂守军首次进行面对面接触<FireTwoTone />
                    </span>
                </div>
            </div>
        )
    }

    const SearchList = useMemo(() => {
        return searchData.map((item, index) => {
            return <SearchItem key={index}/>
        })
    }, [searchData]);

    return (
        <div className={styles.container}>
            <div className={styles.searchMain}>
                <Card>{animalList}</Card>
            </div>
            <div className={styles.searchSideBar}>
                <Card style={{padding: 0}}>
                    <div className={styles.header}>
                        <div className={styles.headerText}>
                            搜索发现
                        </div>
                    </div>
                    <div className={styles.topSearch}>
                        {SearchList}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default SearchResult;