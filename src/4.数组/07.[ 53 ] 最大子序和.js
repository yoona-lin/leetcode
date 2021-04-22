/**
 * * 题目名称：最大子序和
 * * 题目地址：https://leetcode-cn.com/problems/maximum-subarray
 * 
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），
返回其最大和。


示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：
输入：nums = [1]
输出：1

示例 3：
输入：nums = [0]
输出：0

示例 4：
输入：nums = [-1]
输出：-1

示例 5：
输入：nums = [-100000]
输出：-100000
 
提示：
1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。


 */

// * 思路：
// 两层循环，累加后判断
// 失败，搞不定
// var maxSubArray = function(nums) {
//   if(!nums || nums.length == 0){
//     return 0
//   }
//   let cur = 0, next = 0;
//   const len = nums.length;
//   for(let i = 0; i < len - 1; i++){
//     cur = nums[i];
//     // let next = 0;
//     let nextI = function(){
//       for(let j = i + 1; j < len; j++){
//         // cur = nums[i];
//         // next = nums[j];
//         // cur += next;
//         let curJ = nums[j] + cur; 
//         return Math.max(cur, curJ);
//       }
//     }
//     next = Math.max(next, nextI);
//   }
//   return next
// };


// 方法一：动态规划
// 思路和算法

// 假设 \textit{nums}nums 数组的长度是 nn，下标从 00 到 n-1n−1。

// 我们用 f(i)f(i) 代表以第 ii 个数结尾的「连续子数组的最大和」，
// 那么很显然我们要求的答案就是：

// \max_{0 \leq i \leq n-1} \{ f(i) \}
// 0≤i≤n−1
// max{f(i)}

// 因此我们只需要求出每个位置的 f(i)f(i)，然后返回 ff 数组中的最大值即可。
// 那么我们如何求 f(i)f(i) 呢？我们可以考虑 \textit{nums}[i]nums[i] 单独成为一段
// 还是加入 f(i-1)f(i−1) 对应的那一段，这取决于 \textit{nums}[i]nums[i] 
// 和 f(i-1) + \textit{nums}[i]f(i−1)+nums[i] 的大小，我们希望获得一个比较大的，于是可以写出这样的动态规划转移方程：

// f(i) = \max \{ f(i-1) + \textit{nums}[i], \textit{nums}[i] \}
// f(i)=max{f(i−1)+nums[i],nums[i]}

// 不难给出一个时间复杂度 O(n)O(n)、空间复杂度 O(n)O(n) 的实现，
// 即用一个 ff 数组来保存 f(i)f(i) 的值，用一个循环求出所有 f(i)f(i)。
// 考虑到 f(i)f(i) 只和 f(i-1)f(i−1) 相关，于是我们可以只用一个变量 \textit{pre}pre 
// 来维护对于当前 f(i)f(i) 的 f(i-1)f(i−1) 的值是多少，从而让空间复杂度降低到 O(1)O(1)，
// 这有点类似「滚动数组」的思想。


var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};


// 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
// 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
// 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
// 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
// 时间复杂度：O(n)O(n)
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var maxSubArray = function(nums) {
//   let ans = nums[0];
//   let sum = 0;
//   for(const num of nums) {
//       if(sum > 0) {
//           sum += num;
//       } else {
//           sum = num;
//       }
//       ans = Math.max(ans, sum);
//   }
//   return ans;
// };


// public static int maxSubArray(int[] nums) {
//   if(nums.length == 1){
//       return nums[0];
//   }
//   int maxSubArray = nums[0];
//   int sum = nums[0];
//   for(int i = 1; i < nums.length; i++){
//       //sum要想有资格继续壮大 就必须大于 0 否则还不如恢复0
//       sum = Math.max(sum,0);
//       sum += nums[i];
//       //maxSubArray始终取最大值
//       maxSubArray = Math.max(sum,maxSubArray);
//   }
//   return maxSubArray;
// }




// 详细解读动态规划的实现, 易理解：
// https://leetcode-cn.com/problems/maximum-subarray/solution/xiang-xi-jie-du-dong-tai-gui-hua-de-shi-xian-yi-li/



// 测试用例
// let test = ''

console.time('执行用时');
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.timeEnd('执行用时');