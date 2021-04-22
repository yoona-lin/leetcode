/**
 * * 题目名称：存在重复元素
 * * 题目地址：https://leetcode-cn.com/problems/contains-duplicate

给定一个整数数组，判断是否存在重复元素。
如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

*/

// * 思路：


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const map = new Map();
  let len = nums.length;
  for(let i = 0; i < len; i++){
    if(map.has(nums[i])){
      return true;
    }else{
      map.set(nums[i], i)
    }
  }
  return false
};

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
//  var containsDuplicate = function(nums) {
//   return new Set(nums).size != nums.length
// };

// 思路解析
// 方法一 排序
// 数组排序后，判断相邻元素是否相等。

// Java
// class Solution {
//     public boolean containsDuplicate(int[] nums) {
//         Arrays.sort(nums);
//         for (int i = 0; i < nums.length - 1; ++i) {
//             if (nums[i] == nums[i + 1]) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
// 时间复杂度 : O(n \log n)O(nlogn)。即排序的时间复杂度。扫描的时间复杂度 O(n)O(n) 可忽略。
// 空间复杂度 : O(1)O(1)。 没有用到额外空间。如果深究 Arrays.sort(nums) 使用了栈空间，
// 那就是 O(\log n)O(logn)。


// 方法二 使用 set
// 遍历数组，数字放到 set 中。如果数字已经存在于 set 中，直接返回 true。如果成功遍历完数组，
// 则表示没有重复元素，返回 false。

// Java
// class Solution {
//     public boolean containsDuplicate(int[] nums) {
//         Set<Integer> set = new HashSet<>();
//         for (int num: nums) {
//             if (set.contains(num)) {
//                 return true;
//             }
//             set.add(num);
//         }
//         return false;
//     }
// }


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');