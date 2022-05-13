/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-12 18:32:15
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-13 14:42:46
 */
interface exploreSpecialContent {
    title: string,
    answers: string
}

interface exploreSpecialData {
    banner: string,
    title: string,
    description: string,
    content: Array<exploreSpecialContent>
  }

interface exploreSpecialState {
    code: string,
    data: Array<exploreSpecialData>
}

interface exploreColumnData {
    name: string,
    description: string,
    subscribe: number,
    articles: number,
    avatar: string
}

interface exploreColumnState {
    code: string,
    data: Array<exploreColumnData>,
    desc: string
}

interface roundTableData {
    banner: string,
    title: string,
    description: string,
    content: Array<exploreSpecialContent> 
}

interface roundTableState {
    code: string,
    data: Array<roundTableData>
}

export { roundTableState, exploreColumnState, exploreSpecialState, exploreColumnData, exploreSpecialData, roundTableData                                                                                                                                                                                                                                                                                         };