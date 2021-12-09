/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-14 23:42:27
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-10-26 23:54:18
 */
import { get, post } from '../http';

export const getAnimals = () => get('/animal',null);

export const getAnimalsByArea = (cid: number) => get(`area/${cid}/animal`,null);
