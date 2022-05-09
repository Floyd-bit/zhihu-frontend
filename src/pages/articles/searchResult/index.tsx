/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-09 00:42:37
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-09 23:33:59
 */
import { getArticleByPage } from "@/request/api/article";
import { FireTwoTone } from "@ant-design/icons";
import { Card, Pagination, Skeleton } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Animal from '../components/article/article';
import Comments from "../components/comments";
import styles from "./index.css";

const SearchResult: React.FC<{}> = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentComment, setCurrentComment] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const searchData = [1,2,3,4,5];

    const showComment = useCallback((id: number) => {
        setCurrentComment(id);
    }, []);
    
    const pageChange = (page: number) => {
        console.log(page);
        setCurrentPage(page);
    };

    const onShowSizeChange = (current: number, pageSize: number) => {
        console.log(current, pageSize);
        setPageSize(pageSize);
    }

    useEffect(() => {
        setIsLoading(true);
        getArticleByPage({ page: currentPage, size: pageSize }).then((res: any) => {
            setArticles(res.result.content);
            setTimeout(() => { setIsLoading(false) }, 1000);
        })
    }, [currentPage, pageSize]);

    const animalList = useMemo(() => {
        return articles.map((item: any, index: number) => {
            if (isLoading) {
                return <Skeleton key={index} active />;
            } else if (currentComment === -1 || currentComment !== item.id) {
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
            <div className={styles.SearchMain}>
                <Card>{animalList}</Card>
                <div style={{ margin: '0 auto' }}>
                    <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} current={currentPage} total={100} onChange={pageChange} />
                </div>
            </div>
            <div className={styles.SearchSideBar}>
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