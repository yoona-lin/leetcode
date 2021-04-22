/**
 * * 题目名称：路径总和
 * * 题目地址：https://leetcode-cn.com/problems/path-sum
 
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，
这条路径上所有节点值相加等于目标和 targetSum 。

叶子节点 是指没有子节点的节点。

示例 1：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true

示例 2：
输入：root = [1,2,3], targetSum = 5
输出：false

示例 3：
输入：root = [1,2], targetSum = 0
输出：false
 
提示：
树中节点的数目在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000

*/

// * 思路：

// 思路
// sum —— 从根节点到叶子节点的路径上的节点值相加的目标和
// 对 root 递归。转为判断：root 的左、右子树中能否找出和为 sum - root.val 的路径
// 即，每遍历一个节点，sum 就减去当前节点值，当遍历到叶子节点时，已经没有子节点了，
// 如果 sum - 当前叶子节点值 == 0 ，就是找到了从根节点到叶子节点的和为 sum 的路径
// 时间复杂度：O(n)，每个节点被遍历一次

// 代码
// const hasPathSum = (root, sum) => {
//   if (root == null) return false;                // 遍历到null节点
//   if (root.left == null && root.right == null) { // 遍历到叶子节点
//     return sum - root.val == 0;                  // 如果满足这个就返回true。否则返回false
//   }
//   // 当前递归问题 拆解成 两个子树的问题，其中一个true了就行
//   return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val); 
// }


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {  
  if(root == null) return false;
  if(root.left == null && root.right == null){
    return targetSum - root.val == 0;
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');