/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-17 21:09:32
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-17 21:30:44
 */
export function dateToString(date: Date): string {
    if(date instanceof Date) {
        const str = date.toLocaleDateString();
        const [year, month, day] = str.split('/');
        const formattedMonth = month.padStart(2, '0');
        const formattedDay = day.padStart(2, '0');
        return `${year}-${formattedMonth}-${formattedDay}`;
    }
    return '';
}