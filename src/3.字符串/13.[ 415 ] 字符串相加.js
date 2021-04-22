/**
 * * 题目名称：字符串相加
 * * 题目地址：https://leetcode-cn.com/problems/add-strings
 
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

 

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

*/

// 方法一：模拟
// 思路与算法

// 本题我们只需要对两个大整数模拟「竖式加法」的过程。竖式加法就是我们平常学习生活中常用的对两个整数相加的方法，
// 回想一下我们在纸上对两个整数相加的操作，是不是如下图将相同数位对齐，从低到高逐位相加，
// 如果当前位和超过 1010，则向高位进一位？因此我们只要将这个过程用代码写出来即可。

// 具体实现也不复杂，我们定义两个指针 ii 和 jj 分别指向 \textit{num}_1num 1和 \textit{num}_2num 的末尾，
// 即最低位，同时定义一个变量 \textit{add}add 维护当前是否有进位，然后从末尾到开头逐位相加即可。
// 你可能会想两个数字位数不同怎么处理，这里我们统一在指针当前下标处于负数的时候返回 00，
// 等价于对位数较短的数字进行了补零操作，这样就可以除去两个数字位数不同情况的处理，

// 具体可以看下面的代码。
// JavaScript
// var addStrings = function(num1, num2) {
//     let i = num1.length - 1, j = num2.length - 1, add = 0;
//     const ans = [];
//     while (i >= 0 || j >= 0 || add != 0) {
//         const x = i >= 0 ? num1.charAt(i) - '0' : 0;
//         const y = j >= 0 ? num2.charAt(j) - '0' : 0;
//         const result = x + y + add;
//         ans.push(result % 10);
//         add = Math.floor(result / 10);
//         i -= 1;
//         j -= 1;
//     }
//     return ans.reverse().join('');
// };



// 这么写应该比较简洁了，也尽量没用库函数和语法糖。
// 时间复杂度O(n)，n是较长的数字字符串的长度，空间复杂度 O(1)。

// const addStrings = (num1, num2) => {
//   while (num1.length > num2.length) num2 = '0' + num2;
//   while (num1.length < num2.length) num1 = '0' + num1; // 先补0对齐
//   let res = '';     // 结果字符串
//   let carry = 0;    // 进位
//   for (let i = num1.length - 1; i >= 0; i--) { // 加法 从右往左做
//     const sum = +num1[i] + +num2[i] + carry;   // +号将字符转数字
//     res = sum % 10 + res;                      // 模10的结果 + res字符串
//     carry = sum > 9 ? 1 : 0;
//   }
//   return carry == 1 ? '1' + res : res;
// };

// 不提前补零的话，就要考虑缺位时怎么加，要在遍历时补0：

// const addStrings = (num1, num2) => {
//   let res = '';  
//   let carry = 0;
//   for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
//     const n1 = num1[i] >= 0 ? +num1[i] : 0;
//     const n2 = num2[j] >= 0 ? +num2[j] : 0;
//     const sum = n1 + n2 + carry;
//     res = sum % 10 + res;
//     carry = sum / 10 | 0;
//   }
//   carry && (res = '1' + res);
//   return res;
// };






// * 思路：+0 利用 js 的隐性转换 偷懒
// return str(int(num1)+int(num2))
// 整数准确度不够
// JS最新基本数据类型:BigInt
// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function(num1, num2) {
//   return (parseInt(num1) + parseInt(num2)).toString()
// };


// * 思路：去掉字符双引号，相加，在加上
// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
//  var addStrings = function(num1, num2) {
//    console.log(num1)
//    console.log(num2)
//    console.log(num1.length)
//   let num11 = num1.substring(1, num1.length - 1)
//   let num22 = num2.substring(1, num2.length - 1)
//   console.log(num11)
//   add = Number(num11) + Number(num22);
//   return add.toString()
// };


// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function(num1, num2) {
//   let add = Number(num11) + Number(num22);
//   return add.toString()
// };

// 测试用例
let test = ''

console.time('执行用时');
console.log(addStrings("'11'", "'123'"));
console.timeEnd('执行用时');