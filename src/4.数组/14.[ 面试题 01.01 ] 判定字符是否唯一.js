/**
 * * 题目名称：判定字符是否唯一
 * * 题目地址：https://leetcode-cn.com/problems/is-unique-lcci

实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：
输入: s = "leetcode"
输出: false 

示例 2：
输入: s = "abc"
输出: true

限制：
0 <= len(s) <= 100
如果你不使用额外的数据结构，会很加分。

*/

// * 思路：字符串转数组，对数组进行判断，用哈希表进行存放与拿取对比
//  哈希表好东西



/**
 * @param {string} astr
 * @return {boolean}
 */
//  var isUnique = function(astr) {
//   let arr = astr.split("");
//   console.log(arr)
//   let map = new Map();
//   for(let i = 0; i < arr.length; i++){
//     if(map.has(arr[i])){
//       return false
//     }else{
//       map.set(arr[i], i)
//     }
//   }
//   return true
// };


var isUnique = function(astr) {     
  //不需要进行拆分,可直接循环字符串进行对比判断!!!直接可访问下标!!!    
    for(let i = 0;i<astr.length;i++){
        for(let j = i+1;j<astr.length;j++){
            if(astr[i] == astr[j]){
                return false
            }
        }
    }
    return true
};



// /**
//  * @param {string} astr
//  * @return {boolean}
//  */
//  var isUnique = function(astr) {
//   return new Set(astr).size === astr.length
// };



// 测试用例
let test = ''

console.time('执行用时');
console.log(isUnique('leetcode'));
console.timeEnd('执行用时');