/**
 * * 题目名称：合并两个有序数组
 * * 题目地址：https://leetcode-cn.com/problems/merge-sorted-array

给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，
这样它就有足够的空间保存来自 nums2 的元素。

示例 1：
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]

示例 2：
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
    return [...nums1.slice(0, m),...nums2]
};

var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1;
    let tail = m + n - 1;
    var cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
};

*/

// * 思路：

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  //   let len1 = nums1.length, len2 = nums2.length
    if(m === 0){
      return nums2
    }
    if(n === 0){
      return nums1
    }
    console.log(m, n)
    let pointer = m + n - 1
    let [m1, n1] = [m - 1, n - 1]
    while(pointer > 0){
      if(nums1[m1] > nums2[n1]){
      //   [nums1[p1], nums1[p1 + 1]] = [nums2[p2], nums1[p1]]
        nums1[pointer] = nums1[m1]
        nums1[m1] = nums2[n1]
        m1--
      }else if(nums1[m1] === nums2[n1]){
        nums1[pointer]
      }else{
        nums1[pointer] = nums2[n1]
        n1--
      }
      pointer--
    }
    return nums1
  };

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');