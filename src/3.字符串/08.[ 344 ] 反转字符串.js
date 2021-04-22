/**
 * * 题目名称：反转字符串
 * * 题目地址：https://leetcode-cn.com/problems/reverse-string

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

示例 2：
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]

*/

// * 思路：js的数组颠倒方法,数组直接调用

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
//  var reverseString = function(s) {
//   return s.reverse();//js的数组颠倒方法
// };



// * 思路：首尾双指针替换，但钱指针小于一半时返回
// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function(s) {
//   let prev = 0, next = s.length - 1,len = s.length;
//   while(prev < Math.floor(len / 2)){
//     let item = s[prev];
//     s[prev] = s[next];
//     s[next] = item;
//     prev++;
//     next--;
//   }
//   return s
// };


// 方法一：双指针

// 思路与算法
// 对于长度为 N 的待被反转的字符数组，我们可以观察反转前后下标的变化，
// 假设反转前字符数组为 s[0] s[1] s[2] ... s[N - 1]，
// 那么反转后字符数组为 s[N - 1] s[N - 2] ... s[0]。比较反转前后下标变化很容易
// 得出 s[i] 的字符与 s[N - 1 - i] 的字符发生了交换的规律，
// 因此我们可以得出如下双指针的解法：

// 将 left 指向字符数组首元素，right 指向字符数组尾元素。
// 当 left < right：
// 交换 s[left] 和 s[right]；
// left 指针右移一位，即 left = left + 1；
// right 指针左移一位，即 right = right - 1。
// 当 left >= right，反转结束，返回字符数组即可。

// 代码
// JavaScript
// var reverseString = function(s) {
//     const n = s.length;
//     for (let left = 0, right = n - 1; left < right; ++left, --right) {
//         [s[left], s[right]] = [s[right], s[left]];
//     }
// };

// 复杂度分析
// 时间复杂度：O(N)O(N)，其中 NN 为字符数组的长度。一共执行了 N/2N/2 次的交换。
// 空间复杂度：O(1)O(1)。只使用了常数空间来存放若干变量。



// 测试用例
let test = ''

console.time('执行用时');
console.log(reverseString(["h","e","l","l","o"]));
console.timeEnd('执行用时');