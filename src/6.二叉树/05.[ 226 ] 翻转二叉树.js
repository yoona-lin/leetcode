/**
 * * 题目名称：翻转二叉树
 * * 题目地址：https://leetcode-cn.com/problems/invert-binary-tree
 
翻转一棵二叉树。

示例：
输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：
谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

*/

const invertTree = (root) => {
  if (root == null) { // 遍历到null节点时，不用翻转，直接返回它本身
    return root;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  // 内部的翻转交给递归去做
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

var invertTree = function(root) {
  function traversal (root) {
    if (root === null) {
      return null
    } else {
      [root.left, root.right] = [traversal(root.right), traversal(root.left)]
      return root
    }
  }
  return  traversal(root)
}


// * 思路：

var invertTree = function(root) {
  if(root == null){
    return
  }

};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');