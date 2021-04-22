/**
 * * 题目名称：移动零
 * * 题目地址：https://leetcode-cn.com/problems/move-zeroes

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

原地解法！
双指针！

*/

// * 思路：
// 方法1. 双指针交换
// 指针 ii 、jj 初始指向索引 0
// 指针 jj 指向提供给非 0 项的坑位
// 指针 ii 推进找非 0 项，想交换到 jj 指向的坑位


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if(!nums || nums.length == 0){
    return 0
  }
  let i = 0, j = 0, len = nums.length;

  // 双指针交换
  while(j < len){
    if(nums[j]){
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }

  // 覆盖后替换
  // while(j < len){
  //   if(nums[j]){
  //     nums[i] = nums[j];
  //     i++;
  //   }
  //   j++;
  // }
  // for(i; i < len; i++){
  //   nums[i] = 0;
  // }
  return nums;
};


// 方法2. 非 0 项覆盖到数组前头
// 将所有非 0 项覆盖到数组的前头，然后将剩下的位置覆盖为 0
// 安排了所有非 0 项，剩下位置就属于 0
// j 指向提供给非 0 项的坑位

// var moveZeroes = function (nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] != 0) { // 遇到非0项
//           nums[j] = nums[i]; // 覆盖到j上
//           j++;    // j后移
//       }
//   }
//   for (let i = j; i < nums.length; i++) { // 剩下的位置赋为0
//       nums[i] = 0;
//   }
// };


// 测试用例
let test = ''

console.time('执行用时');
console.log(moveZeroes([0,1,0,3,12]));
console.timeEnd('执行用时');