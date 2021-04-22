/**
 * * 题目名称：两个数组的交集
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-arrays
 
给定两个数组，编写一个函数来计算它们的交集。

 示例 1：
 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 输出：[2]

 示例 2：
 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 输出：[9,4]
  
 说明：
 输出结果中的每个元素一定是唯一的。
 我们可以不考虑输出结果的顺序。

*/

// 思路
// 看看 nums2 中有哪些在 nums1 也出现过的数字。

// 遍历 nums1，将出现过的数字存入 map，对应值为 true。
// 遍历 nums2，如果当前数字在 map 中存在，说明这是一个交集数字，推入结果数组，
// 并且要把它在 map 中的值置为 false，避免重复推入结果数组。

// 代码
// const intersection = (nums1, nums2) => {
//   const map = {};
//   const res = [];

//   for (const num1 of nums1) {
//     map[num1] = true; // 记录nums1出现过的数字
//   }
//   for (const num2 of nums2) {
//     if (map[num2]) {  // 如果nums2的这个数字在nums1出现过
//       map[num2] = false; // 置为false，避免重复推入res
//       res.push(num2);  // 交集数字推入res
//     }
//   }
//   return res;
// };

// 复盘总结
// map[num2] = false的操作，是在欺骗后面的数字——这个数在数组1没出现过，
// 你不用考虑它是否有交集了，但其实它是出现过的，这样避免了它重复进入 res。
// 当然也可以记录数字出现的具体次数。
// 也可以用 set 这样的容器。反正就是，用空间换时间，不要对数组1的每一个数都遍历检查数组2中是否有相同的数。

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
//  const intersection = (nums1, nums2) => {
//   return [...new Set(nums1)].filter(item => nums2.includes(item));
// };

// 利用ES6Set的特性求交集/并集

// 求交集：
// var intersection = function(nums1, nums2) {
//     const a = new Set(nums1);
//     const b = new Set(nums2);
//     return [...new Set([...a].filter(x =>b.has(x)))]
// };
// 并集：
// var intersection = function(nums1, nums2) {
//     return [...new Set(nums1,nums2)]
// };



// * 思路：两个数组都set去重，再对比查找

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // * 思路：两个数组都set去重，再对比查找
  // let nums11 = new Set(nums1);
  // let nums22 = new Set(nums2);
  // let i = 0, arr = [];
  // while(i < nums11.length){
  //   let j = 0;
  //   while(j < nums22.length){
  //     if(nums11[i] === nums22[j]){
  //       arr.push(nums11[i])
  //     }
  //     j++
  //   }
  //   i++
  // }
  // return arr

  // * 思路：map存放与查找
  const map = new Map();
  let res = [];
  for(let i = 0; i < nums1.length; i++){
    map.set(nums1[i], true)
  }
  for(let j = 0; j < nums2.length; j++){
    if(map.get(nums2[j])){
      res.push(nums2[j])
      map.set(nums2[j], false)
    }
  }
  return res

  const map = {};
  const res = [];

  for (const num1 of nums1) {
    map[num1] = true; // 记录nums1出现过的数字
  }
  for (const num2 of nums2) {
    if (map[num2]) {  // 如果nums2的这个数字在nums1出现过
      map[num2] = false; // 置为false，避免重复推入res
      res.push(num2);  // 交集数字推入res
    }
  }
  return res;
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');