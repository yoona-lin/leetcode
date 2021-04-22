/**
 * * 题目名称：旋转数组的最小数字
 * * 题目地址：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
 
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，
输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：
输入：[3,4,5,1,2]
输出：1

示例 2：
输入：[2,2,2,0,1]
输出：0

注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/



// 思路
旋转后的数组可以划分为两个有序的子区间，前面区间的元素都大于等于后面的元素，
我们要找的是两个子区间的分界，很自然想到二分查找
nums[mid] > nums[right]

最小元素肯定在mid的右边，所以 left = mid + 1
nums[mid] == nums[right]

此时 mid 可能处于左边区间，也可能处于右边区间，即最小元素不确定在它的左边还是右边
所以 right-- ，换一个 nums[right] 再试
nums[mid] < nums[right]

此时 mid 肯定处在右边的增区间，所以 right = mid

代码
const minArray = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + right >>> 1;
    // const temp=Math.floor(left+(right-left)/2);
    // const temp=Math.floor(left+right / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] == nums[right]) {
      right--;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

// 解题思路
// 依题意 可以使用双指针遍历 找出第一次降序的位置 即为所求
// 当 prev > cur 此时的cur即为该旋转数组的最小值

// 代码
// /**
//  * @param {number[]} numbers
//  * @return {number}
//  */
//  var minArray = function(numbers) {
//   /* 
//       依题意 可以使用双指针遍历 找出第一次降序的位置 即为所求
//       当 prev > cur 此时的cur即为该旋转数组的最小值
//   */
//   for (let i = 0, l = numbers.length - 1; i < l; i++) {
//       if (numbers[i] > numbers[i + 1]) return numbers[i + 1]
//   }
  
//   return numbers[0]
// };


// 解题思路3--ES6扩展运算符
// 还是这种简单粗暴

// 代码
// /**
//  * @param {number[]} numbers
//  * @return {number}
//  */
//  var minArray = function(numbers) {
//   return Math.min(...numbers)
// };





// * 思路：
// 排序后第一个
// 对比，出现小的第一个

/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
   // 排序后第一个
  // numbers.sort((a,b) => a - b);
  // return numbers[0]


  // 对比，出现小的第一个，没有就默认第一个
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > numbers[i + 1]){
        return numbers[i + 1]
    }
  }
  return numbers[0]
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');