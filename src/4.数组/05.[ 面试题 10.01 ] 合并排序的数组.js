/**
 * * 题目名称：合并排序的数组
 * * 题目地址：https://leetcode-cn.com/problems/sorted-merge-lcci

 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
说明:

A.length == n + m


 */

// * 思路：
// 方法一：直接合并后排序
// 算法

// 最直观的方法是先将数组 BB 放进数组 AA 的尾部，然后直接对整个数组进行排序。

// var merge = function(A, m, B, n) {
//   A.splice(m, A.length - m, ...B);
//  return A.sort((a, b) => a - b);
// };

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
// var merge = function(A, m, B, n) {
//   // let arr = A.splice(m, A.length - m, ...B); //不能这样直接赋值与运算
  
//   // console.log(arr);
//   // console.log(A);
//   // [ 0, 0, 0 ]
//   // [ 1, 2, 3, 2, 5, 6 ]
//   // [ 0, 0, 0 ]

//   A.splice(m, A.length - m, ...B);
//   let arr = A;

//   // console.log(arr);
//   // console.log(A);
//   // [ 1, 2, 3, 2, 5, 6 ]
//   // [ 1, 2, 3, 2, 5, 6 ]
//   // [ 1, 2, 2, 3, 5, 6 ]

//   return arr.sort((a,b) => a - b)
// };


// 方法二：双指针

// 算法
// 方法一没有利用数组 AA 与 BB 已经被排序的性质。
// 为了利用这一性质，我们可以使用双指针方法。
// 这一方法将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中。


// var merge = function(A, m, B, n) {
//   let Ai = 0, Bi = 0;
//   const sorted = new Array(m + n).fill(0);
//   var cur;
//   while (Ai < m || Bi < n) {
//       if (Ai === m) {
//           cur = B[Bi++];
//       } else if (Bi === n) {
//           cur = A[Ai++];
//       } else if (A[Ai] < B[Bi]) {
//           cur = A[Ai++];
//       } else {
//           cur = B[Bi++];
//       }
//       sorted[Ai + Bi - 1] = cur;
//   }

//   力扣上这段代码不能省略，因为默认输出A，所以要赋值回来
  // for (let i = 0; i != m + n; ++i) {
  //     A[i] = sorted[i];
  // }
//   return sorted;
// };


// 测试用例
// let test = ''

console.time('执行用时');
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.timeEnd('执行用时');