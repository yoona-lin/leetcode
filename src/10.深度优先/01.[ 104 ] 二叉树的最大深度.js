/**
 * * 题目名称：二叉树的最大深度
 * * 题目地址：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
 
给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

*/

// * 思路：
// 解题思路
// 标签：DFS
// 找出终止条件：当前节点为空
// 找出返回值：节点为空时说明高度为 0，所以返回 0；节点不为空时则分别求左右子树的高度的最大值，
// 同时加1表示当前节点的高度，返回该数值
// 某层的执行过程：在返回值部分基本已经描述清楚
// 时间复杂度：O(n)O(n)

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var maxDepth = function(root) {
//     if(!root) {
//         return 0;
//     } else {
//         const left = maxDepth(root.left);
//         const right = maxDepth(root.right);
//         return Math.max(left, right) + 1;
//     }
// };

// 递归
// 树的深度和它的左右子树的深度有关。
// 一个树的最大深度 = 根节点的高度（就是1）+ 左右子树的最大深度中的较大者。
// “嗨，maxDepth函数，请帮我计算出我的左右子树的最大深度，我等你的返回结果，我就能算出自己的最大深度了。”
// 递归的结束条件：当遍历到 null 节点，它们的高度是 0，返回 0。
// 代码
// const maxDepth = (root) => {
//   if (root == null) return 0;
//   const leftMaxDepth = maxDepth(root.left);
//   const rightMaxDepth = maxDepth(root.right);
//   return 1 + Math.max(leftMaxDepth, rightMaxDepth);
// };

// BFS (典型的BFS模板写法)
// const maxDepth = (root) => {
//   if (root == null) return 0;
//   const queue = [root];
//   let depth = 1;
//   while (queue.length) {
//     // 当前层的节点个数
//     const levelSize = queue.length;          
//     // 逐个让当前层的节点出列
//     for (let i = 0; i < levelSize; i++) {    
//       // 当前出列的节点
//       const cur = queue.shift();            
//       // 左右子节点入列
//       if (cur.left) queue.push(cur.left);
//       if (cur.right) queue.push(cur.right); 
//     }
//     // 当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
//     if (queue.length) depth++;
//   }
//   return depth;
// };



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
 * @return {number}
 */
 var maxDepth = function(root) {
  if(!root){
    return 0
  }else{
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return 1 + Math.max(left + right)
  }
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(maxDepth([3,9,20,null,null,15,7]));
console.timeEnd('执行用时');