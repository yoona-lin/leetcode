/**
 * * 题目名称：二叉树的最小深度
 * * 题目地址：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree

给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
说明：叶子节点是指没有子节点的节点。

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：2

示例 2：
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 
提示：
树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000


*/

// * 思路：

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
//  * root是一个棵二叉树，它的构造函数在初始代码的注释里，
//  * 就是下面这个。它有一个val，节点值，有left 左子树，right 右子树。
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


// 「任君选择」DFS 写了4版 BFS 写了1版（详细注释）

// DFS
// DFS 的写法较灵活，大同小异，都是前序遍历，下面代码没有刻意合并，比较好读。
// 代码 1
// const minDepth = (root) => {
//     if (root == null) {            // 递归到null节点，返回高度0
//         return 0;
//     }
//     if (root.left && root.right) { // 左右子树都存在，当前节点的高度1+左右子树递归结果的较小值
//         return 1 + Math.min(minDepth(root.left), minDepth(root.right));
//     } else if (root.left) {        // 左子树存在，右子树不存在
//         return 1 + minDepth(root.left);
//     } else if (root.right) {       // 右子树存在，左子树不存在
//         return 1 + minDepth(root.right);
//     } else {                       // 左右子树都不存在，光是当前节点的高度1
//         return 1;
//     }
// };

// 代码 2
// const minDepth = (root) => {
//     if (root == null) {
//         return 0;
//     }
//     const left = minDepth(root.left);
//     const right = minDepth(root.right);

//     if (left > 0 && right > 0) {
//         return 1 + Math.min(left, right);
//     } else if (left > 0) {
//         return 1 + left;
//     } else if (right > 0) {
//         return 1 + right;
//     } else {
//         return 1;
//     }
// };

// 代码 3
// const minDepth = (root) => {
//     if (root == null) return 0;

//     let depth = 1;  // 当前子树的深度，有1兜底 (根节点高度)

//     if (root.left && root.right) { // 左右子树都存在
//         depth += Math.min(minDepth(root.left), minDepth(root.right));
//     } else if (root.left) {
//         depth += minDepth(root.left);
//     } else if (root.right) {
//         depth += minDepth(root.right);
//     } else {                    // 左右子树都不存在
//         depth += 0;
//     }
//     return depth; // 返回整棵树的计算结果
// };

// 代码 4
// const minDepth = (root) => {
//     if (root == null) {
//         return 0;
//     }
//     let depth = Infinity; // 当前子树的深度

//     if (root.left) { // 左子树存在，用1+左子树的最小深度去刷新depth
//         depth = Math.min(depth, 1 + minDepth(root.left));
//     }
//     if (root.right) { // 由子树存在，用1+右子树的最小深度去刷新depth
//         depth = Math.min(depth, 1 + minDepth(root.right));
//     }
//     if (root.left == null && root.right == null) { // 都不存在
//         depth = 1;   
//     }
//     return depth;
// };

// BFS
// BFS 更直观，一层层遍历，一旦发现当前层的某个节点没有子节点，说明当前处在最小深度。
// BFS 代码
// const minDepth = (root) => {
//     if (root == null) return 0;

//     const queue = [root]; // 根节点入列
//     let depth = 1;        // 当前层的深度

//     while (queue.length) { // 直到清空队列
//         const levelSize = queue.length; // 当前层的节点个数
//         for (let i = 0; i < levelSize; i++) { // 遍历 逐个出列
//             const cur = queue.shift();  // 出列
//             if (cur.left == null && cur.right == null) { // 如果没有孩子，直接返回所在层数
//                 return depth;
//             }
//             if (cur.left) queue.push(cur.left); // 有孩子，让孩子入列
//             if (cur.right) queue.push(cur.right);
//         }
//         depth++; // 肯定有下一层，如果没有早就return了
//     }
// };
// 这道题考递归基本功，写出来了但可能会有一点模糊，毕竟人脑对递归过程不是直觉的。



/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
  if (root == null) return 0;
  if(root.left && root.right){
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
  }else if(root.left){
    return 1 + minDepth(root.left)
  }else if(root.right){
    return 1 + minDepth(root.right)
  }else{
    return 1
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');