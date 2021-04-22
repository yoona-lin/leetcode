/**
 * * 题目名称：存在重复元素
 * * 题目地址：https://leetcode-cn.com/problems/contains-duplicate
 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  return new Set(nums).length != nums.length
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++){
      if(map.has(nums[i])){
          return true
      }else{
          map.set(nums[i], i)
      }
  }
  return false
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');