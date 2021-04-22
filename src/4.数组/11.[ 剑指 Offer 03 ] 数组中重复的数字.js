/**
 * * 题目名称：数组中重复的数字
 * * 题目地址：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，
但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
 

限制：

2 <= n <= 100000

*/

// * 思路：
// 排序，找相邻的相同返回

// 两层循环对比，相同返回

// var findRepeatNumber = function(nums) {
//   let numsSort = nums.sort();
//   let i = 0;
//   while(i < numsSort.length){
//     if(numsSort[i] == nums[i + 1]){
//       return numsSort[i];
//     }
//     i++;
//   }
// };

// 如果没有重复数字，那么正常排序后，数字i应该在下标为i的位置，所以思路是重头扫描数组，
// 遇到下标为i的数字如果不是i的话，（假设为m),那么我们就拿与下标m的数字交换。在交换过程中，
// 如果有重复的数字发生，那么终止返回ture


// class Solution {
//     public int findRepeatNumber(int[] nums) {
//         int temp;
//         for(int i=0;i<nums.length;i++){
//             while (nums[i]!=i){
//                 if(nums[i]==nums[nums[i]]){
//                     return nums[i];
//                 }
//                 temp=nums[i];
//                 nums[i]=nums[temp];
//                 nums[temp]=temp;
//             }
//         }
//         return -1;
//     }
// }
// var findRepeatNumber = function(nums) {
//   let temp;
//     for(let i=0;i<nums.length;i++){
//       while (nums[i]!=i){
//         if(nums[i]==nums[nums[i]]){
//           return nums[i];
//         }
//         temp=nums[i];
//         nums[i]=nums[temp];
//         nums[temp]=temp;
//       }
//     }
//     return -1;
// };

// 解题思路
// 遍历到当前数，若哈希表中存在，则返回结果便可。
// 若当前数，不在哈希表中，则将该数，存入哈希表，供后续判断使用。

// 示例代码

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findRepeatNumber = function(nums) {
//     let map = new Map();
//     for(let i of nums){
//         if(map.has(i)) return i;
//         map.set(i, 1);
//     }
//     return null;
// };
// 时间复杂度：O(n)O(n)，操作 nums 的次数。
// 空间复杂度：O())O())，map 的存储空间。


// 测试用例
let test = ''

console.time('执行用时');
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
console.timeEnd('执行用时');