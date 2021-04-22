/**
 * * 题目名称：加一
 * * 题目地址：https://leetcode-cn.com/problems/plus-one

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [0]
输出：[1]
 

提示：

1 <= digits.length <= 100
0 <= digits[i] <= 9


*/

// * 思路：
// 标签：数组遍历
// 这道题需要整理出来有哪几种情况，在进行处理会更舒服
// 末位无进位，则末位加一即可，因为末位无进位，前面也不可能产生进位，比如 45 => 46
// 末位有进位，在中间位置进位停止，则需要找到进位的典型标志，即为当前位 %10后为 0，则前一位加 1，直到不为 0 为止，比如 499 => 500
// 末位有进位，并且一直进位到最前方导致结果多出一位，对于这种情况，需要在第 2 种情况遍历结束的基础上，进行单独处理，比如 999 => 1000
// 在下方的 Java 和 JavaScript 代码中，对于第三种情况，对其他位进行了赋值 0 处理，Java 比较 tricky 直接 new 数组即可，JavaScript 则使用了 ES6 语法进行赋值
// 时间复杂度：O(n)O(n)

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
//  var plusOne = function(digits) {
//   const len = digits.length;
//   for(let i = len - 1; i >= 0; i--) {
//       digits[i]++;
//       digits[i] %= 10;
//       if(digits[i]!=0)
//           return digits;
//   }
//   digits = [...Array(len + 1)].map(_=>0);;
//   digits[0] = 1;
//   return digits;
// };


// 直接判断是不是9，不就知道需不需要进位吗？为什么还要 % 一下？
// js的最后一个进位的可以return [1, ...digits]；digits.unshift(1);

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
//  var plusOne = function(digits) {
//   let len = digits.length;
//   for(let i = len - 1; i > -1; i--){
//       if(digits[i] === 9){
//           digits[i] = 0
//       }else{
//           digits[i] += 1
//           return digits
//       }
//   }
//   digits = [1].concat(...digits)
//   return digits
// };


var plusOne = function(digits) {

};



// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');