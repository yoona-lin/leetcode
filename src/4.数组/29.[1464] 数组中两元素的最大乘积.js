/*
题目：1464. 数组中两元素的最大乘积
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-product-of-two-elements-in-an-array

给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，
使 (nums[i]-1)*(nums[j]-1) 取得最大值。
请你计算并返回该式的最大值。

示例 1：
输入：nums = [3,4,5,2]
输出：12 
解释：如果选择下标 i=1 和 j=2（下标从 0 开始），则可以获得最大值，(nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12 。 

示例 2：
输入：nums = [1,5,4,5]
输出：16
解释：选择下标 i=1 和 j=3（下标从 0 开始），则可以获得最大值 (5-1)*(5-1) = 16 。

示例 3：
输入：nums = [3,7]
输出：12

提示：
2 <= nums.length <= 500
1 <= nums[i] <= 10^3

*/

// 思路：排序，最大值直接计算
// 


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  // let len = nums.length;
  // let arr = nums.sort((a, b) => a - b);
  // console.log(arr)
  // return (arr[len - 1] - 1)  * (arr[len - 2] - 1)

  let arr = nums.sort((a, b) => b - a);
  console.log(arr)
  return (arr[0] - 1)  * (arr[1] - 1)

};



// 测试用例
let test = ''

console.time('执行用时');
console.log(maxProduct([3,4,5,2]));
console.timeEnd('执行用时');