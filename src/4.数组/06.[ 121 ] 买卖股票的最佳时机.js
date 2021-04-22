/**
 * * 题目名称：买卖股票的最佳时机
 * * 题目地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

 

示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 

提示：

1 <= prices.length <= 105
0 <= prices[i] <= 104

 */

// * 思路：
// 双指针，差值检索

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

// 执行错误
// 198 / 210 个通过测试用例


//   if(prices == null || prices.length == 0 || prices.length == 1){
//     return 0;
//   }

//   let i, j, len = prices.length, arr = [];
//   for(i = 0; i < len - 1; i++){
//      for(j = i + 1; j < len; j++){
//           arr.push(prices[j] - prices[i])
//      }
//   }

//   console.log(arr);
//   let arrSort = arr.sort((a,b) => a - b);
//   let max = arrSort.pop();
//   if(max <= 0){
//        return 0
//   }else{
//        return max
//   }

/*
思路一 双层遍历 O(n^2) 
a 外层遍历i 0~prices.length - 1
b 内层遍历j i + 1~prices.length - 1
c 找出大于当前项目 prices[i] 并 卖出 并 更新最大值
d 输出结果
*/

if (!prices || !prices.length) return 0

    const len = prices.length
    let max = 0, cur = 0, next = 0

    for (let i = 0; i < len; i++) {
        cur = prices[i]
        for (let j = i + 1; j < len; j++) {
            next = prices[j]
            if (next > cur) {
               max = Math.max(max, next - cur)
            }
        }
    }

    return max

};


// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
//  var maxProfit = function(prices) {
//      /*
//          思路一 双层遍历 O(n^2) 
//              a 外层遍历i 0~prices.length - 1
//              b 内层遍历j i + 1~prices.length - 1
//                  c 找出大于当前项目 prices[i] 并 卖出 并 更新最大值
//              d 输出结果
//       */
     
//      if (!prices || !prices.length) return 0
 
//      const len = prices.length
//      let max = 0, cur = 0, next = 0
 
//      for (let i = 0; i < len; i++) {
//          cur = prices[i]
//          for (let j = i + 1; j < len; j++) {
//              next = prices[j]
//              if (next > cur) {
//                  max = Math.max(max, next - cur)
//              }
//          }
//      }
 
//      return max
     
 
 
//      /*  动态规划吗？
//          同最大子序列
//          这是最小子序列？？
//          思路二 DP  Time: O(n) + Space: O(n)
//          dp[i] 前i天卖出的最大利润
//          min : prices 前i项中的最小值
//          prices[i] - min: 当前位置卖出可得最大利润
//          dp[i - 1] : 前i-1项目卖出可得的最大利润
//          [7, 1, 5, 3, 6, 4] => dp[i] = Math.max( dp[i - 1], prices[i] - min )
//          [7]                [0, 0, 0, 0, 0, 0]
//          [7, 1]             [0, 0, 0, 0, 0, 0]
//          [7, 1, 5]          [0, 0, 4, 0, 0, 0]
//          [7, 1, 5, 3]       [0, 0, 4, 4, 0, 0]
//          [7, 1, 5, 3, 6]    [0, 0, 4, 4, 5, 0]
//          [7, 1, 5, 3, 6, 4] [0, 0, 4, 4, 5, 5]
 
//          输出结果 dp[len - 1]
//      */
     
     
//      if (!prices || !prices.length) return 0
 
//      const len = prices.length, dp = new Array(len).fill(0)
//      let min = prices[0] // 前i项的最小值
 
//      for (let i = 1, price; i < len; i++) {
//          price = prices[i]
//          min = Math.min(min, price)
//          dp[i] = Math.max(dp[i - 1], price - min )
//      }
 
//      return dp[len - 1]
     
 
//      /* 
//          思路三 DP + 常量级变量 min max Time - O(n) + Space - O(1)
//          精简 我们只关心 max 与 min 故不需要再构建dp 数组
//      */
 
//      if (!prices || !prices.length) return 0
 
//      let min = Number.MAX_SAFE_INTEGER, max = 0
 
//      for (let i = 0, price; i < prices.length; i++) {
//          price = prices[i]
//          min = Math.min(min, price)
//          max = Math.max(max, price - min)//不干扰min的
//      }
 
//      return max
//  };

// 测试用例
// let test = ''

console.time('执行用时');
console.log(maxProfit([7,1,5,3,6,4]));
console.timeEnd('执行用时');