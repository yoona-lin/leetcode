/**
 * * 题目名称：两数之和
 * * 题目地址：https://leetcode-cn.com/problems/two-sum
 * 
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]
 

提示：

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案


解题思路
遍历 numsnums , 判断每个数字和 targettarget 的差值，是否存在于哈希表中，若存在，返回两数字的索引即可，若不存在，记录当前数字在哈希表中。
哈希表存储格式：数字 => 所在 numsnums 索引 。
图解演示

1 / 4

示例代码

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//   let map = new Map();
//   for(let i = 0, len = nums.length; i < len; i++){
//       // 如果哈希表存有能与当前元素相加为 target 的数字，则直接皆大欢喜，返回结果
//       if(map.has(target - nums[i])){
//           return [map.get(target - nums[i]), i];
//       // 如果没有，将当前数字存入哈希，值为当前数字在数组中的索引
//       }else{
//           map.set(nums[i], i);
//       }
//   }
//   return [];
// };

// 思路:
// 利用数组减少查询时间
// 在暴力法中，内层循环查找差值很浪费时间，那么如何减少查询时间呢？利用数组就可以减少查询时间。
// 使用一层循环，每遍历到一个元素就计算该元素与 targettarget 之间的差值 difdif，然后以 difdif 为下标到数组temp中寻找，
// 如果 temp[dif] 有值(即不是 undefinedundefined)，则返回两个元素在数组 numsnums 的下标，如果没有找到，则将当前元素存入数组 temptemp 中(下标: nums[i], Value: inums[i],Value:i) 。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let temp = []
  for(let i = 0; i < nums.length; i++){
    let diff = target - nums[i]
    if(temp[diff] != undefined){
      return [temp[diff], i]
    }
    temp[nums[i]] = i
  }
};


// * 思路：

// 暴力法
// 使用两层循环，外层循环计算当前元素与 targettarget 之间的差值，内层循环寻找该差值，若找到该差值，则返回两个元素的下标。


//代码
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   // for(let i = 0; i < nums.length - 1; i++){
//   //   for(let j = i + 1; j < nums.length; j++){
//   //     let targetNum = nums[i] + nums[j];
//   //     if(targetNum === target){
//   //       return [i,j]
//   //     }
//   //   }
//   // }
//   for()
// };

var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++){
    let diff = target - nums[i]
    if(map.has(diff)){
      return [i, map.get(diff)]
    }else{
      map.set(nums[i], i)
    }
  }
  return []
};

// 测试用例
// let test = '';
let arr = [2,7,7,7,7,7,11,15]
let arrSet = new Set([...arr])

console.time('执行用时');
console.log(twoSum([2,7,11,15], 17));
console.log([...arrSet]);
console.timeEnd('执行用时');