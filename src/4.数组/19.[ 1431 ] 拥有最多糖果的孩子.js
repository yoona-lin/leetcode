/**
 * * 题目名称：拥有最多糖果的孩子
 * * 题目地址：https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies

给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。

对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，
此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。

示例 1：
输入：candies = [2,3,5,1,3], extraCandies = 3
输出：[true,true,true,false,true] 
解释：
孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。

示例 2：
输入：candies = [4,2,1,1,2], extraCandies = 1
输出：[true,false,false,false,false] 
解释：只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。

示例 3：
输入：candies = [12,1,12], extraCandies = 10
输出：[true,false,true]

提示：
2 <= candies.length <= 100
1 <= candies[i] <= 100
1 <= extraCandies <= 50

*/

// * 思路：
// 找出数组最大，每一项加完对比返回

// 哈希表计数对比


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  // const max = Math.max.apply(null, candies)
  // const max = candies.reduce((a,b) => a > b ? a : b)
  const max = Math.max(...candies)
  console.log(max)
  let arr = [];
  for(let i = 0; i < candies.length; i++){
    if(candies[i] + extraCandies < max){
      arr[i] = false
    }else{
      arr[i] = true
    }
  }
  return arr
};


// 思路
// 大家的工资不一样。现在有一份奖金要发
// 有的人拿了奖金可以成为工资最高的人，有的人不可以
// 依次将奖金试着加给每个人，看看他有了奖金能否高于裸工资最高的那个人
// 如果能，他就是潜在的工资最高的人，否则，他不是
// 代码

// const kidsWithCandies = (candies, extraCandies) => {
//   let max = 0
//   for (const candie of candies) { // 找到数组中最大值
//     max = Math.max(max, candie)
//   }
//   for (let i = 0; i < candies.length; i++) { // 再循环一遍数组
//     candies[i] = candies[i] + extraCandies >= max
//   }
//   return candies
// };


// 测试用例
let test = ''

console.time('执行用时');
console.log(kidsWithCandies([4,2,1,1,2], 1));
console.timeEnd('执行用时');