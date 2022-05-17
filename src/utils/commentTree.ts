/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-17 23:51:42
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-18 00:15:42
 */
import { commentType } from "@/pages/articles/type";

export interface treeType extends commentType {
    children?: Array<commentType>
}

export function tranverseToTree(obj: Array<commentType>) {
    const tree: Array<treeType> = [];
    const map = new Map();
    obj.forEach((item: commentType) => {
        if(!item.pid) {
            tree.push(item);
            map.set(item.id, item);
        } else {
            const parent = map.get(item.pid);
            if(!parent.children) {
                parent.children = [];
            }
            parent.children.push(item)
        }
    })
    return tree;
}