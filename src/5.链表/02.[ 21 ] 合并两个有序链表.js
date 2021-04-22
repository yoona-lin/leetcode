/**
 * * 题目名称：合并两个有序链表
 * * 题目地址：https://leetcode-cn.com/problems/merge-two-sorted-lists

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]

提示：
两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列

*/
// 思路
// 标签：链表、递归

// 这道题可以使用递归实现，新链表也不需要构造新节点，我们下面列举递归三个要素
// 终止条件：两条链表分别名为 l1 和 l2，当 l1 为空或 l2 为空时结束
// 返回值：每一层调用都返回排序好的链表头
// 本级递归内容：如果 l1 的 val 值更小，则将 l1.next 与排序好的链表头相接，l2 同理
// O(m+n)O(m+n)，mm 为 l1的长度，nn 为 l2 的长度
// 代码
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
//     if(l1 === null){
//         return l2;
//     }
//     if(l2 === null){
//         return l1;
//     }
//     if(l1.val < l2.val){
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     }else{
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };


// 递归（未优化，详尽注释）

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @name 构造函数-构造链表
//  * @param {*} val 初始化的值，可以不传，默认为 0
//  * @param {*} next 初始化的下一个链表，可以不传，默认为 null
//  */
// const ListNode = function(val, next) {
//   this.val = val || 0;
//   this.next = next || null;
// }

// /**
//  * @name 解题函数
//  * @param {ListNode} l1 第一个链表
//  * @param {ListNode} l2 第二个链表
//  * @return {ListNode} 返回的新链表
//  */
// const mergeTwoLists = (l1, l2) => {
//   // 1. 初始化一个链表
//   const newListNode = new ListNode();
  
//   // 3. 开始递归
//   const recursion = (tempListNode, l1, l2) => {
//     // 3.1 如果左链表和右链表都空了，那就结束本次递归
//     if (!l1 && !l2) {
//       return;
//     }

//     // 3.2 如果左链表或者右链表空了，那么当前的 result 追加有的那个，也结束本次递归
//     if (!l1 || !l2) {
//       tempListNode.next = l1 || l2;
//       return;
//     }

//     // 3.3 重点：初始化一个新链表，用来获取下一个新节点
//     // 这里配合点 4 来看比较容易懂
//     tempListNode.next = new ListNode();
//     tempListNode = tempListNode.next;

//     // 3.4 排序，同时将采纳了的链表往后挪一位
//     if (l1.val >= l2.val) {
//       tempListNode.val = l2.val;
//       l2 = l2.next;
//     } else {
//       tempListNode.val = l1.val;
//       l1 = l1.next;
//     }

//     // 3.4 继续下一次递归
//     recursion(tempListNode, l1, l2);
//   };
//   // 2. 传入这个链表，和 l1、l2
//   recursion(newListNode, l1, l2);

//   // 4. 重点：我们初始化的时候，有一个没用的链表，记得往后挪一位
//   return newListNode.next;
// };

// const l1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: { val: 4, next: null },
//   },
// };

// const l2 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: { val: 4, next: null },
//   },
// };

// console.log(mergeTwoLists(l1, l2));

// 作者：jsliang
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/javascript-di-gui-die-dai-3-jie-fa-xiang-jin-zhu-3/


// * 思路：


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(l1 == null){
    return l1
  }
  if(l2 == null){
    return l2
  }
  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next,l2)
    return l1
  }else{
    l2.next = mergeTwoLists(l1,l2.next)
    return l2
  }
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');