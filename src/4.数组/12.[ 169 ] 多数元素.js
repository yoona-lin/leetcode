/**
 * * 题目名称：多数元素
 * * 题目地址：https://leetcode-cn.com/problems/majority-element

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：[3,2,3]
输出：3

示例 2：
输入：[2,2,1,1,1,2,2]
输出：2

进阶：

尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

*/

// * 思路：
// 官方很多种思路
// 方法一：哈希表
// 思路

// 我们知道出现次数最多的元素大于 \lfloor \dfrac{n}{2} \rfloor⌊ 2n ⌋ 次，
// 所以可以用哈希表来快速统计每个元素出现的次数。

// 算法

// 我们使用哈希映射（HashMap）来存储每个元素以及出现的次数。
// 对于哈希映射中的每个键值对，键表示一个元素，值表示该元素出现的次数。

// 我们用一个循环遍历数组 nums 并将数组中的每个元素加入哈希映射中。
// 在这之后，我们遍历哈希映射中的所有键值对，返回值最大的键。
// 我们同样也可以在遍历数组 nums 时候使用打擂台的方法，维护最大的值，
// 这样省去了最后对哈希映射的遍历


// // 1.利用字典
// var majorityElement = function (nums) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i]))
//       map.set(nums[i], 1);
//     else 
//       map.set(nums[i], map.get(nums[i]) + 1);
//   }
 
//   for (let [key, value] of map.entries()) {
//     if (value > nums.length / 2) 
//       return key;
//   }
// };


// // 2.利用栈
// var majorityElement = function (nums) {
//     let stack=[];
//     for(let i=0;i<nums.length;i++){
//         if(stack.length==0||stack[stack.length-1]==nums[i]){
//            stack.push(nums[i]);
//         }
//         else  stack.pop();
//     }
//     return stack[0];
// };


// // 3.利用抵消
// var majorityElement = function(nums) {
//     let sum=0;
//     let target=0;
//     for(let i=0;i<nums.length;i++){
//         if(sum==0) target=nums[i];
//         nums[i]==target?sum++:sum--;
//     }
//     return target;

// };

// // 解题思路
// // h记录数出现次数，若出现>数组长度一半的数，直接返回
// // 代码
// var majorityElement = function(nums) {
//     for (var i = nums.length, h = {}; i--;) {
//         h[nums[i]] = (h[nums[i]] || 0) + 1
//         if (h[nums[i]] > nums.length / 2) {
//             return nums[i]
//         }
//     }
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var majorityElement = function(nums) {
//   let map = new Map();
//   for(let i = 0; i < nums.length; i++){
//     if(map.has(nums[i])){
//       map.set(nums[i], map.get(nums[i]) + 1)
//     }else{
//       map.set(nums[i], 1)
//     }
//   }
//   console.log(map)
//   // Map(2) { 2 => 4, 1 => 3 }

//   // 对map对象的操作
//   // Map.prototype.entries()
//   // entries() 方法返回一个新的包含 [key, value] 对的 Iterator 对象，
//   // 返回的迭代器的迭代顺序与 Map 对象的插入顺序相同
//   for(let [key, value] of map.entries()){
//     if(value > (nums.length / 2)){
//       return key;
//     }
//   }
//   // 为什么这个不行???
//   // map.entries();
//   // console.log(map)
//   // map.forEach(function(value, key) {
//   //     if(value > (len / 2)){
//   //         return key
//   //     }
//   // })
// };


// 方法一: 排序
// 因为大于一半, 所以排序后的 中间那个数必是
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//   nums.sort((a,b) => a - b)
//   return nums[Math.floor(nums.length / 2)]
// };
// 时间复杂度 O(nlogn) 使用了快速排序


// 方法二: 搞对象
// 用对象记录数出现的次数, 大于一半的就是了
// var majorityElement = function(nums) {
//    let half = nums.length / 2
//    let obj = {}
//    for(let num of nums){
//       obj[num] = (obj[num] || 0) + 1
//       if(obj[num] > half) return num
//    }
// };
// 时间复杂度: O(n) 遍历一次
// 空间复杂度: O(n) obj中属性最多为 n/2 个


// 方法三: 栈方法
// 当 元素和栈顶元素相等 或 空栈 时入栈
// 否则出栈
// 最后栈中剩下的必然都是是大于一半的那个元素
// var majorityElement = function(nums) {
//   let stack = []
//   for(let n of nums){
//     let m = stack.length
//     if(stack[m - 1] === n || !m){
//       stack.push(n)
//     } else {
//       stack.pop()
//     }
//   }
//   return stack[0]
// };
// 时间 O(n) 循环一次nums
// 空间 O(n)


// 方法四: 抵消(栈方法降维)
// 相同的加1, 不相同的减1, 因为是大于一半, 所以最后肯定剩下大于一半的那个
// var majorityElement = function(nums) {
//   let x = 0
//   let m = 0
//   for(let n of nums){
//     if(m === 0) x = n
//     m += x === n ? 1 : -1
//   }
//   return x
// };
// 时间 O(n) 循环一次nums
// 空间 O(1) 使用几个基本变量


// 测试用例
let test = ''

console.time('执行用时');
console.log(majorityElement([2,2,1,1,1,2,2]));
console.timeEnd('执行用时');