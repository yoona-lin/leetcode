/**
 * * 题目名称：杨辉三角
 * * 题目地址：https://leetcode-cn.com/problems/pascals-triangle
 * 
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

// * 思路：
// 0,1项都是1，以及每一项的第一个与最后一个都是1
// 两种情况，2与 >2
// 1 与 2 时直接赋值
// 大于 2 时两层循环，i 外层，每一项 i 内再 j 循环，最后添加进去



/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  // const len = numRows.length;
  if(numRows == 1){
    return [[1]]
  }
  if(numRows == 2){
    return [[1],[1,1]]
  }
  // const arrDefault = [];
  let arrTatal = [[1],[1,1]];
  for(let i = 2; i < numRows; i++){
    let arrItemJ = new Array(i);
    let arrItemI = arrTatal[i - 1];
    // console.log(arrItemI)
    // console.log(arrItemI[0])
    arrItemJ[0] = 1;
    arrItemJ[i] = 1;
    for(let j = 1; j < i; j++){
      // let arrItemJ = [];
      // let arrItemI = arrTatal[1];
      // arrItemJ[0] = 1;
      // arrItemJ[i] = 1;
      arrItemJ[j] = arrItemI[j - 1] + arrItemI[j];
      // return arrItemJ;
    }
    arrTatal.push(arrItemJ)
    // arrTatal = arrTatal;
    // console.log(arrTatal)
  }
  return arrTatal;
};



// 官方：
// var generate = function(numRows) {
//   const ret = [];

//   for (let i = 0; i < numRows; i++) {
//       const row = new Array(i + 1).fill(1);
//       for (let j = 1; j < row.length - 1; j++) {
//           row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
//       }
//       ret.push(row);
//   }
//   return ret;
// };

// 递推填充
// 解题思路
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
// 用伪代码来说就是 n[i] = (n-1)[i] + (n-1)[i-1]

// //如: 5
// //我们先建个 数组: 每行长度递增 , 每行的每个元素为1
// list = [
//           [1],
//           [1,1],
//           [1,1,1],
//           [1,1,1,1],
//           [1,1,1,1,1]
//         ]
// // 在循环这个list, 把从第三项开始实现这个 伪函数 n[i] = (n-1)[i] + (n-1)[i-1]
// list = [
//           [1],
//           [1,1],
//           [1,2,1],
//           [1,3,3,1],
//           [1,4,6,4,1]
//         ]

// 代码
// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
// var generate = function(numRows) {
//   let list = []
//   for(let i = 1; i<= numRows; i++){                   // 先建个 数组  每行长度递增 , 每行的每个元素为1
//     let arr = Array.apply(null,Array(i)).map(t => 1)
//     list.push(arr)
//   }
//   list = list.map((item,index) => {
//     if(index >= 2){                       // 当第三行开始才有这个规律
//       let last = list[index-1]
//       list[index] = item.map((t,i) => {   // 把list 的 index 重新赋值 , 
//         if(i > 0 && i < item.length - 1){ // 去除首尾项
//           return last[i] + last[i-1]
//         }
//         return t
//       })
//       return list[index]
//     }
//     return item
//   })
//   return list
// };



// 思路：是判断如果不是该列数组的首位或者最后一位，
// 则值为a[i-1][j-1] + a[i-1][j] ，否则值为1

// var generate = function (numRows) {
//     const result = [];
//     if (numRows <= 0) {
//         return result;
//     }
//     let i = 0, j = 0;
//     for (let i = 0; i < numRows; i ++) {
//         const subArr = [];
//         for (let j = 0; j <= i; j++) {
//             if (j > 0 && j < i) {
//                 subArr.push(result[i-1][j-1] + result[i-1][j]);
//             } else {
//                 subArr.push(1);
//             }
//         }
//         result.push(subArr);
//     }
//     return result;
// };



// 测试用例
let test = ''

console.time('执行用时');
console.log(generate(5));
console.timeEnd('执行用时');