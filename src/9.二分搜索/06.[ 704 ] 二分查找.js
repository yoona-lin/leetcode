/**
 * * 题目名称：二分查找
 * * 题目地址：https://leetcode-cn.com/problems/binary-search
 
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

示例 1:
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

示例 2:
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1

提示：
你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。


*/

// * 思路：
// 二分法分区对比
// 哈希表对比查找
// 直接数组查找
// 


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right){
    const mid = left + right >>> 1;
    if(nums[mid] > target){
      right = mid - 1
    }else if(nums[mid] < target){
      left = mid + 1
    }else{
      return mid
    }
  }
  return -1
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(search([5],5));
console.timeEnd('执行用时');