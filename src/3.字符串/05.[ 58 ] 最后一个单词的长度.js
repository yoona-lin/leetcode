/**
 * * 题目名称：最后一个单词的长度
 * * 题目地址：https://leetcode-cn.com/problems/length-of-last-word

给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。
如果不存在最后一个单词，请返回 0 。
单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

示例 1：
输入：s = "Hello World"
输出：5

示例 2：
输入：s = " "
输出：0

提示：
1 <= s.length <= 104
s 仅有英文字母和空格 ' ' 组成

*/

// * 思路：


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let ss = s.trim()//js判断一个String是空字符串或者空格组成的字符串
  //String的方法trim()，去掉前导空白和后导空白
  if (ss.length === 0) {
    return 0
  }
  console.log(s.length)
  let arr = ss.split(" ")
  console.log(arr)
  console.log(arr.length)
  let last = arr[arr.length - 1]
  console.log(last)
  // if(last === ''){
  //   return 1
  // }else{
    return last.length
  // }
  // console.log(arr)
};

// 思路
// 标签：字符串遍历
// 一个一个从后面判断上来
// 从字符串末尾开始向前遍历，其中主要有两种情况
// 第一种情况，以字符串"Hello World"为例，从后向前遍历直到遍历到头或者遇到空格为止，
// 即为最后一个单词"World"的长度5
// 第二种情况，以字符串"Hello World "为例，需要先将末尾的空格过滤掉，再进行第一种情况的操作，
// 即认为最后一个单词为"World"，长度为5
// 所以完整过程为先从后过滤掉空格找到单词尾部，再从尾部向前遍历，找到单词头部，最后两者相减，即为单词的长度
// 时间复杂度：O(n)，n为结尾空格和结尾单词总体长度

// 代码

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function(s) {
//     let end = s.length - 1;
//     while(end >= 0 && s[end] == ' ') end--;
//     if(end < 0) return 0;
//     let start = end;
//     while(start >= 0 && s[start] != ' ') start--;
//     return end - start;
// };


// 解题思路
// 正则
// 注释掉的部分，通过正则来匹配末尾的字母和空格，将字母分组后返回其长度
// 循环
// 倒着循环字符串，当字符不为空格时，累计数量，当再次为空格时，跳出循环

// 代码
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function(s) {
//     // var m=s.match(/([a-zA-Z]*)\s*$/)
//     // return m?m[1].length:0
//     var len=0
//     for(var i=s.length-1;i>=0;i--){
//         var char=s[i]
//         if(char!==" "){
//             len++
//         }else{
//             if(len>0) break
//         }
//     }
//     return len
// };


// 测试用例
let test = ''

console.time('执行用时');
console.log(lengthOfLastWord(' '));
console.timeEnd('执行用时');