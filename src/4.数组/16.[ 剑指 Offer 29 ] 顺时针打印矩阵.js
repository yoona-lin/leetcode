/**
 * * 题目名称：顺时针打印矩阵
 * * 题目地址：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
 
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

示例 1：
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

示例 2：
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 
限制：
0 <= matrix.length <= 100
0 <= matrix[i].length <= 100

*/

// * 思路：循环,奇数,搞不定


// 如果一条边从头遍历到底，则下一条边遍历的起点随之变化。如果不遍历到底，可以减小横向和竖向遍历之间的影响。
// 我选择一次迭代遍历一个“圈”，然后 4 条边的两端同时收缩，一层层向内处理，按顺时针依次遍历：上、右、下、左层。
// 不再形成“环”了就结束遍历，剩下一行或一列，然后单独判断即可。
// 上边界 top : 0
// 下边界 bottom : matrix.length - 1
// 左边界 left : 0
// 右边界 right : matrix[0].length - 1
// 矩阵不一定是方阵
// top < bottom && left < right 是循环的条件。
// 结束循环时，分 3 种情况：
// top == bottom && left < right —— 剩一行。
// top < bottom && left == right —— 剩一列。
// top == bottom && left == right —— 剩一项（也是一行/列）。
// 处理剩下的单行或单列
// 因为是按顺时针推入结果数组的，所以：
// 剩下的一行，从左至右 依次推入结果数组。
// 剩下的一列，从上至下 依次推入结果数组。
// 代码
// 每个元素访问一次，时间复杂度 O(mn)O(mn)，m、n 分别是行数和列数。空间复杂度 O(mn)O(mn)。


// const spiralOrder = (matrix) => {
//   if (matrix.length == 0) return [];
//   const res = [];

//   let top = 0;
//   let bottom = matrix.length - 1;
//   let left = 0;
//   let right = matrix[0].length - 1;

//   while (top < bottom && left < right) {
//     for (let i = left; i < right; i++) res.push(matrix[top][i]);   // 上层
//     for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右层
//     for (let i = right; i > left; i--) res.push(matrix[bottom][i]);// 下层
//     for (let i = bottom; i > top; i--) res.push(matrix[i][left]);  // 左层
//     right--;
//     top++;
//     bottom--;
//     left++;
//   }
//   if (top == bottom) { // 剩下一行，从左到右依次添加
//     for (let i = left; i <= right; i++) {
//       res.push(matrix[top][i]);
//     }
//   } else if (left == right) { // 剩下一列，从上到下依次添加
//     for (let i = top; i <= bottom; i++) {
//       res.push(matrix[i][left]);
//     }
//   }
//   return res;
// };

// 同上
// var spiralOrder = function(matrix) {
//   if(matrix.length == 0) return [];
//   let arr = [];
//   let top = 0;
//   let right = matrix[0].length - 1;
//   let bottom = matrix.length - 1;
//   let left = 0;
//   while(left < right && top < bottom) {
//       for(let j = left; j < right; ++j) {
//           arr.push(matrix[top][j]);
//       }
//       for(let i = top; i < bottom; ++i) {
//           arr.push(matrix[i][right]);
//       }
//       for(let j = right; j > left; --j) {
//           arr.push(matrix[bottom][j]);
//       }
//       for(let i = bottom; i > top; --i) {
//           arr.push(matrix[i][left]);
//       }
//       top++;
//       left++;
//       bottom--;
//       right--;
//   }
//   if(left == right && top != bottom) {//还剩一列
//       for(let i = top; i <= bottom; ++i) {
//           arr.push(matrix[i][left]);
//       }
//   } else if(top == bottom && left != right) {// 还剩一行
//       for(let j = left; j <= right; ++j) {
//           arr.push(matrix[top][j]);
//       }
//   } else if(top == bottom && left == right){//还剩一个
//       arr.push(matrix[left][top])
//   }
//   return arr;
// };


// 换一种循环的条件，也是可以的
// 遍历完所有项时，res 数组构建完毕。可以用 res 数组的长度等于矩阵元素个数，作为循环的结束条件。


// const spiralOrder = (matrix) => {
//   if (matrix.length == 0) return [];
//   const res = [];
//   const size = matrix.length * matrix[0].length;

//   let top = 0;
//   let bottom = matrix.length - 1;
//   let left = 0;
//   let right = matrix[0].length - 1;

//   while (res.length !== size) {
//     for (let i = left; i <= right; i++) {
//       res.push(matrix[top][i]);
//     }
//     top++;
//     for (let i = top; i <= bottom; i++) {
//       res.push(matrix[i][right]);
//     }
//     right--;
//     if (res.length === size) break; // 遍历结束
//     for (let i = right; i >= left; i--) {
//       res.push(matrix[bottom][i]);
//     }
//     bottom--;
//     for (let i = bottom; i >= top; i--) {
//       res.push(matrix[i][left]);
//     }
//     left++;
//   }
//   return res;
// };

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/shou-hui-tu-jie-liang-chong-bian-li-de-ce-lue-na-c/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  let len = matrix.length;
  let arr = new Array();
  let k = 0;
  while()
};



// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');