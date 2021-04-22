/**
 * * 题目名称：宝石与石头
 * * 题目地址：https://leetcode-cn.com/problems/jewels-and-stones
 
给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。
S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:
输入: J = "aA", S = "aAAbbbb"
输出: 3

示例 2:
输入: J = "z", S = "ZZ"
输出: 0 

*/

// * 思路：

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let map = new Map();
  for(let i = 0; i < jewels.length; i++){
    map.set(jewels[i],i)
  }
  let count = 0;
  for(let j = 0; j < stones.length; j++){
    if(map.has(stones[j])){
      count++
    }
  }
  return count
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(numJewelsInStones("aA","aAAbbbb"));
console.timeEnd('执行用时');