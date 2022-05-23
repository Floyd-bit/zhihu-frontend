/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-23 17:16:56
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-23 17:27:52
 */
import { articleType } from "@/pages/articles/type";

export function QuestionSort(data: Array<articleType>): Array<articleType>{
    const sortedData = data.slice(); 
    sortedData.sort((a, b) => b.articleStar - a.articleStar);
    return sortedData;
}

export function RandomQuestion(data: Array<articleType>): Array<articleType> {
    const randomData = data.slice();
    return randomData.reverse().slice(3);
}