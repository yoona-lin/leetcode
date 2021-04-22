/**
 * * 题目名称：移除元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-element
 * 
 * 
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

示例 1：

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
示例 2：

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

 */

// * 思路：
// 方法一：双指针
// 思路
// 既然问题要求我们就地删除给定值的所有元素，我们就必须用 O(1)O(1) 的额外空间来处理它。如何解决？
// 我们可以保留两个指针 ii 和 jj，其中 ii 是慢指针，jj 是快指针。

// 算法
// 当 nums[j]nums[j] 与给定的值相等时，递增 jj 以跳过该元素。只要 nums[j] \neq valnums[j] 
//  =val，我们就复制 nums[j]nums[j] 到 nums[i]nums[i] 并同时递增两个索引。重复这一过程，直到 jj 到达数组的末尾，该数组的新长度为 ii。
// 该解法与 删除排序数组中的重复项 的解法十分相似。

// public int removeElement(int[] nums, int val) {
//   int i = 0;
//   for (int j = 0; j < nums.length; j++) {
//       if (nums[j] != val) {
//           nums[i] = nums[j];
//           i++;
//       }
//   }
//   return i;
// }

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if(nums == null || nums.length == 0){
    // 报错:Cannot read property 'length' of null
    // 报错:Cannot read property 'length' of undefined 
    return 0
  }
  let p1 = 0;
  let p2 = 0;
  // let p = 0;

  // int i = 0;
  //   for (int j = 0; j < nums.length; j++) {
  //       if (nums[j] != val) {
  //           nums[i] = nums[j];
  //           i++;
  //       }
  //   }
  //   return i;

  while(p2 < nums.length){
    if(nums[p2] != val){
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }
  return p1;
};

// 测试用例
let numsT = null;
let valT = 2;

console.time('执行用时');
console.log(removeElement(numsT,valT));
console.timeEnd('执行用时');