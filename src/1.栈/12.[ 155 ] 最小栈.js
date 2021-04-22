/**
 * * 题目名称：最小栈
 * * 题目地址：https://leetcode-cn.com/problems/min-stack

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
 
示例:
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 

提示：
pop、top 和 getMin 操作总是在 非空栈 上调用。

*/

// * 思路：

// 两个栈
// 思路
// 我们使用两个栈：

// 一个栈存放全部的元素，push，pop都是正常操作这个正常栈。
// 另一个存放最小栈。 每次push，如果比最小栈的栈顶还小，我们就push进最小栈，否则不操作
// 每次pop的时候，我们都判断其是否和最小栈栈顶元素相同，如果相同，那么我们pop掉最小栈的栈顶元素即可
// 关键点
// 往minstack中 push的判断条件。 应该是stack为空或者x小于等于minstack栈顶元素
// 代码
// JavaScript：


// /**
//  * initialize your data structure here.
//  */
// var MinStack = function() {
//     this.stack = []
//     this.minStack = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     this.stack.push(x)
//     if (this.minStack.length == 0 ||  x <= this.minStack[this.minStack.length - 1]) {
//         this.minStack.push(x)
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     const x = this.stack.pop()
//     if (x !== void 0 &&  x === this.minStack[this.minStack.length - 1]) {
//         this.minStack.pop()
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.min = function() {
//     return this.minStack[this.minStack.length - 1]
// };

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.min()
//  */


/**
 * initialize your data structure here.
 */
var MinStack = function() {

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */



// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');