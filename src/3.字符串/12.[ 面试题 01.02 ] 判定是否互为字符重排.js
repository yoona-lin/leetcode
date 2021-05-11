/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci
 
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，
能否变成另一个字符串。

示例 1：
输入: s1 = "abc", s2 = "bca"
输出: true 

示例 2：
输入: s1 = "abc", s2 = "bad"
输出: false

*/

// * 思路：长度一样，对比清除

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
  // let len1 = s1.length, len2 = s2.length
  // let i = 0, j = 0
  // if(len1 != len2){
  //   return false
  // }
  // const map = new Map()


  // 把字符串转换为数组，用sort排序后再转换为字符串，进行比较。
  // 用循环的方法需要判断元素类型和重复次数，相对比较复杂了。
  // return s1.split('').sort().toString()===s2.split('').sort().toString();
  
  // var CheckPermutation = (s1, s2)=>[...s1].sort().join('') === [...s2].sort().join('')

  return [...s1].sort().join('') === [...s2].sort().join('')
  // return s1.split('').sort().toString() === s2.split('').sort().toString()
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');