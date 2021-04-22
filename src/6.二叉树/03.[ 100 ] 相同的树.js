/**
 * * 题目名称：相同的树
 * * 题目地址：https://leetcode-cn.com/problems/same-tree
 * 
 *  超级合集题，解题中有个二叉树的合集的，也有很多不同的解题法
 
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1：
输入：p = [1,2,3], q = [1,2,3]
输出：true

示例 2：
输入：p = [1,2], q = [1,null,2]
输出：false

示例 3：
输入：p = [1,2,1], q = [1,1,2]
输出：false
 
提示：
两棵树上的节点数目都在范围 [0, 100] 内
-104 <= Node.val <= 104

*/
// /**
//  * root四个判断属性，本身是否为 null，left，right，val
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {boolean}
//  */
//  var isSameTree = function(p, q) {

// };

// 解题思路
// 标签：深度优先遍历

// 终止条件与返回值：
// 当两棵树的当前节点都为 null 时返回 true
// 当其中一个为 null 另一个不为 null 时返回 false
// 当两个都不为空但是值不相等时，返回 false

// 执行过程：当满足终止条件时进行返回，不满足时分别判断左子树和右子树是否相同，
// 其中要注意代码中的短路效应

// 时间复杂度：O(n)O(n)，nn 为树的节点个数

// 代码JavaScript
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {boolean}
//  */
// var isSameTree = function(p, q) {
//     if(p == null && q == null) 
//         return true;
//     if(p == null || q == null) 
//         return false;
//     if(p.val != q.val) 
//         return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// 序列化一下就好？？？？？
// var isSameTree = function(p, q) {
//   return JSON.stringify(p)===JSON.stringify(q)
// };
  


// * 思路：

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {

};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');