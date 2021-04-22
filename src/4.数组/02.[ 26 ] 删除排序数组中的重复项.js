/**
 * * 题目名称：删除排序数组中的重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 * 
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

原地: 一个原地算法（in-place algorithm）是一种使用小的，固定数量的额外之空间来转换资料的算法。当算法执行时，输入的资料通常会被要输出的部份覆盖掉。 
原地排序指的是空间复杂度是 O(1) 的排序算法

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 
示例 1：

输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按升序排列

 */

// * 思路：
// 解法： 双指针
// 原地解法
// 首先注意数组是有序的，那么重复的元素一定会相邻。
// 要求删除重复元素，实际上就是将不重复的元素移到数组的左侧。
// 考虑用 2 个指针，一个在前记作 p，一个在后记作 q，算法流程如下：
// 1.比较 p 和 q 位置的元素是否相等。
// 如果相等，q 后移 1 位
// 如果不相等，将 q 位置的元素复制到 p+1 位置上，p 后移一位，q 后移 1 位
// 重复上述过程，直到 q 等于数组长度。
// 返回 p + 1，即为新数组长度。

//代码
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums == null || nums.length == 0){
    return 0
  }
  let p = 0;
  let q = 1;
  while(q < nums.length){
    if(nums[p] != nums[q]){
      if(q - p > 1){
        nums[p + 1] = nums[q];
        p++;
      }
      // nums[p] = nums[q];
      // p++;
    }
    q++;
  }

  // while(q < nums.length){
  //   if(nums[p] != nums[q]){
  //     p++
  //     nums[p] = nums[q];
  //     // p++;
  //   }
  //   q++;
  // }

  return p + 1
  // return p + 1, nums, nums[p + 1]
  // return nums
  // return nums.splice(0, p + 1)
  // return nums.slice(0, p + 1)
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//   if(nums == null || nums.length == 0){
//       return 0;
//   }
//   let qq = 0;
//   let pp = 1;
//   while(pp < nums.length){
//       if(nums[qq] != nums[pp]){
//           qq++;
//           nums[qq] = nums[pp];
//       }
//       pp++
//   }
//   return qq + 1;
// };

// 测试用例
// let test = [0,0,1,3,3,4,1,1,2,2]
// text.sort()//排序

console.time('执行用时');
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.timeEnd('执行用时');