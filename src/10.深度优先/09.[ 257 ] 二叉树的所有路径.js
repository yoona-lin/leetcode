/**
 * * 题目名称：二叉树的所有路径/所有路径的和
 * * 题目地址：https://leetcode-cn.com/problems/binary-tree-paths
 
给定一个二叉树，返回所有从根节点到叶子节点的路径。
说明: 叶子节点是指没有子节点的节点。

示例:
输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]
解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

*/

// * 思路：

// const binaryTreePaths = (root) => {
//   const res = [];

//   const buildPath = (root, pathStr) => {
//     if (root == null) { // 遍历到null
//       return;           // 结束当前递归分支
//     }
//     if (root.left == null && root.right == null) { // 遍历到叶子节点
//       pathStr += root.val; // 路径末尾了，不用加箭头
//       res.push(pathStr);   // 加入解集
//       return;
//     }
//     pathStr += root.val + '->'; // 处理非叶子节点，要加箭头
//     buildPath(root.left, pathStr); // 基于当前的pathStr，递归左子树
//     buildPath(root.right, pathStr); // 基于当前的pathStr，递归右子树
//   };

//   buildPath(root, '');
//   return res;
// };

// 暗含回溯
// 结合上图，这里其实暗含回溯，遍历完左子树，构建出合格的路径，加入解集，遍历右子树之前，
// 路径要撤销最末尾的选择，如果path用的是数组，就会弹出最后一项。
// 我这里用的字符串，pathStr保存了当前节点的路径，递归右子树时，传入它即可，
// 它不包含在递归左子树所拼接的东西。

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/binary-tree-paths/solution/tu-jie-er-cha-shu-de-suo-you-lu-jing-by-xiao_ben_z/

const binaryTreePaths = (root) => {
  const res = [];

  const buildPath = (root, pathStr) => {
    if (root == null) { // 遍历到null
      return;           // 结束当前递归分支
    }
    if (root.left == null && root.right == null) { // 遍历到叶子节点
      pathStr += root.val; // 路径末尾了，不用加箭头
      res.push(pathStr);   // 加入解集
      return;
    }
    pathStr += root.val + '->'; // 处理非叶子节点，要加箭头
    buildPath(root.left, pathStr); // 基于当前的pathStr，递归左子树
    buildPath(root.right, pathStr); // 基于当前的pathStr，递归右子树
  };

  buildPath(root, '');
  return res;
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');