/**
 * * 题目名称：反转链表
 * * 题目地址：https://leetcode-cn.com/problems/reverse-linked-list

反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

*/

// * 思路：

// 方法一：迭代

// 假设链表为 1 \rightarrow 2 \rightarrow 3 \rightarrow \varnothing1→2→3→∅，
// 我们想要把它改成 \varnothing \leftarrow 1 \leftarrow 2 \leftarrow 3∅←1←2←3。

// 在遍历链表时，将当前节点的 \textit{next}next 指针改为指向前一个节点。
// 由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。
// 在更改引用之前，还需要存储后一个节点。最后返回新的头引用。


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next; //next:1
        console.log(curr)
        curr.next = prev; //curr.next:null
        prev = curr; // prev:1->null
        console.log(prev)
        curr = next; // curr:2
        console.log(curr)
    }
    return prev;
    let prev = null;
    let curr = head;
    while(curr){
        const next = curr.next;
    }
};

// 复杂度分析
// 时间复杂度：O(n)O(n)，其中 nn 是链表的长度。需要遍历链表一次。
// 空间复杂度：O(1)O(1)。


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
//  var reverseList = function(head) {

// };


// 测试用例
let test = ''

console.time('执行用时');
console.log(reverseList([1,2,3,4,5]));
console.timeEnd('执行用时');