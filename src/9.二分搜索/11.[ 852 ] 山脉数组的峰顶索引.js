/**
 * * 题目名称：山脉数组的峰顶索引
 * * 题目地址：https://leetcode-cn.com/problems/peak-index-in-a-mountain-array

符合下列属性的数组 arr 称为 山脉数组 ：
arr.length >= 3
存在 i（0 < i < arr.length - 1）使得：
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
给你由整数组成的山脉数组 arr ，返回任何满足
 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。

示例 1：
输入：arr = [0,1,0]
输出：1

示例 2：
输入：arr = [0,2,1,0]
输出：1

示例 3：
输入：arr = [0,10,5,2]
输出：1

示例 4：
输入：arr = [3,4,5,1]
输出：2

示例 5：
输入：arr = [24,69,100,99,79,78,67,36,26,19]
输出：2

提示：
3 <= arr.length <= 104
0 <= arr[i] <= 106
题目数据保证 arr 是一个山脉数组


解题思路

二分搜索
如果正在上坡，那么峰顶一定在后面，否则在前面
A[mid] < A[mid + 1] -> 上坡 -> low = mid + 1
else -> high = mid
代码

// /**
//  * @param {number[]} A
//  * @return {number}
//  */

//  var peakIndexInMountainArray = function(A) {
//   let low = 0,
//       high = A.length - 1;
  
//   while (low < high) {
//     let mid = low + ( (high - low) >> 1 );
    
//     if (A[mid] < A[mid + 1]) {
//       low = mid + 1;
//     } else {
//       high = mid;
//     }
//   }
  
//   return low;
// };

// */

// * 思路：
// 双指针找到第二个小于第一个时返回第一个序号
// 二分法
// indexOf + 排序后最大值
// 哈希表 + 排序后最大值

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let left = 0, right = arr.length - 1
  while(left < right){
    // const mid = Math.floor(left + right / 2);
    const mid = left + right >>> 1;
    if(arr[mid] < arr[mid + 1]){
      left = mid + 1;
    }else{
      right = mid;
    }
  }
  return left
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(peakIndexInMountainArray([3,4,5,1]));
console.timeEnd('执行用时');