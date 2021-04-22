/**
 * * 题目名称：相交链表
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
编写一个程序，找到两个单链表相交的起始节点。 
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], 
skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

*/

// 解法一：标记法(简单但空间复杂度为O(n)，不符合，仅做参考)
// 解题思路： 两次遍历，先遍历一个链表，给链表中的每个节点都增加一个标志位，
// 然后遍历另外一个链表，遍历到第一个已被标志过的节点为两链表相交的起始节点。
// 若遍历完都没有发现已被标志过的节点，则两链表不相交，返回 null

// var getIntersectionNode = function(headA, headB) {
//     while(headA) {
//         headA.flag = true
//         headA = headA.next
//     }
//     while(headB) {
//         if (headB.flag) return headB
//         headB = headB.next
//     }
//     return null
// };

// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 作者：user7746o
// 链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/tu-jie-leetcode160xiang-jiao-lian-biao-by-user7746/

// var getIntersectionNode = function(headA, headB) {
//   // 清除高度差
//   let pA = headA, pB = headB
//   while(pA || pB) {
//       if(pA === pB) return pA
//       pA = pA === null ? headB : pA.next
//       pB = pB === null ? headA : pB.next
//   }
//   return null
// };





// * 思路：

var getIntersectionNode = function(headA, headB) {
  while(headA){
    headA.flag = true
    headA = headA.next
  }
  while(headB){
    if(headB) return headB
    headB = headB.next
  }
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');