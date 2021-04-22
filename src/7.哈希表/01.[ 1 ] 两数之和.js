/**
 * * 题目名称：两数之和
 * * 题目地址：https://leetcode-cn.com/problems/two-sum
 */

// * 思路：

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++){
      let diff = target - nums[i]
      if(map.has(diff)){
          return [map.get(diff),i]
      }else{
          map.set(nums[i],i)
      }
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');