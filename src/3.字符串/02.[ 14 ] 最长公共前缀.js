/**
 * * 题目名称：最长公共前缀
 * * 题目地址：https://leetcode-cn.com/problems/longest-common-prefix

编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

提示：
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成

*/

// * 解题思路： 从前往后一次比较字符串，获取公共前缀

// 思路
// 标签：链表
// 当字符串数组长度为 0 时则公共前缀为空，直接返回
// 令最长公共前缀 ans 的值为第一个字符串，进行初始化
// 遍历后面的字符串，依次将其与 ans 进行比较，两两找出公共前缀，最终结果即为最长公共前缀
// 如果查找过程中出现了 ans 为空的情况，则公共前缀不存在直接返回
// 时间复杂度：O(s)O(s)，s 为所有字符串的长度之和

// 代码
// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     if(strs.length == 0) 
//         return "";
//     let ans = strs[0];
//     for(let i =1;i<strs.length;i++) {
//         let j=0;
//         for(;j<ans.length && j < strs[i].length;j++) {
//             if(ans[j] != strs[i][j])
//                 break;
//         }
//         ans = ans.substr(0, j);
//         if(ans === "")
//             return ans;
//     }
//     return ans;
// };


// 解法二：仅需最大、最小字符串的最长公共前缀
// 解题思路： 获取数组中的最大值及最小值字符串，最小字符串与最大字符串的最长公共前缀也为其他字符串的公共前缀，
// 即为字符串数组的最长公共前缀

// 例如 abc 、 abcd 、ab 、ac ，最小 ab 与最大 ac 的最长公共前缀一定也是 abc 、 abcd 的公共前缀

// 代码实现：

// var longestCommonPrefix = function(strs) {
//     if (strs === null || strs.length === 0) return "";
//     if(strs.length === 1) return strs[0]
//     let min = 0, max = 0
//     for(let i = 1; i < strs.length; i++) {
//         if(strs[min] > strs[i]) min = i
//         if(strs[max] < strs[i]) max = i
//     }
//     for(let j = 0; j < strs[min].length; j++) {
//         if(strs[min].charAt(j) !== strs[max].charAt(j)) {
//             return strs[min].substring(0, j)
//         }
//     }
//     return strs[min]
// };

// 时间复杂度：O(n+m)，n是数组的长度， m 是字符串数组中最短字符的长度
// 空间复杂度：O(1)




// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//   let len = strs.length;
//   let maxStr = '';
//   if(!len){
//     return ""
//   }
//   for(let j = 0; j < strs[0].length; j++){
//     // maxStr = strs[i]
//     // maxStr = strs[0].slice(0, j + 1)
//     itemStrs = strs[0][j]
//     for(let i = 0; i < len-1; i++){
//       // itemStrs = strs[0][j]
//       console.log(itemStrs)
//       console.log(strs[i][j])
//       if(itemStrs != strs[i][j]){
//         console.log("strs[i][j]",strs[i][j])
//         break
//         // return j
//       }
//       // else{
//       //   maxStr += itemStrs
//       // }
//     }
    
//   }
//   // console.log(j)
//   // return maxStr
//   // return 100
// };


// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//   let len = strs.length, i = 0, j = 0, str = '';
//   while(j < strs[0].length){
//     let item = strs[0][j];
//     while(i < len){
//       if(item != strs[i][j]){
//         // break
//         return 122
//       }
//       i++
//     }
//     j++
//   }
//   console.log(j)
//   console.log(strs[0])
//   console.log(strs[0].slice(0, 2))
//   str = str + strs[0].slice(0, j + 1)
//   return str
// };


// 测试用例
let test = ''

console.time('执行用时');
console.log(longestCommonPrefix( ["flower","flow","flight"]));
console.timeEnd('执行用时');