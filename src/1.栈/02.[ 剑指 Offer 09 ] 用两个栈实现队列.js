/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 * 
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

 

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]  
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用

 */

// * 思路：

/* 解题思路
队列的特性是 FIFOFIFO（先入先出），而栈的特性是 FILOFILO（先入后出）。
知道两者特性之后，我们需要用两个栈来模拟队列的特性，一个栈为入队栈，一个栈为出对栈。
当出队栈存在内容时，出队栈的栈顶，即为第一个出队的元素。
若出队栈无元素，我们的需求又是出队的话，我们就需要将入队栈的内容反序导入出队栈，然后弹出栈顶即可。
图解演示
*/

// 示例代码

var CQueue = function() {
    this.stackA = [];   // 入对操作
    this.stackB = [];   // 出对操作
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 如果出对栈存在，则直接弹出栈顶即可
    if(this.stackB.length){
        return this.stackB.pop();
    }else{
        // 若出队栈无内容，入队栈全部倒入出队栈，弹出栈顶
        while(this.stackA.length){
            this.stackB.push(this.stackA.pop());
        }
        // 此时出栈对还无内容，返回 -1
        if(!this.stackB.length){
            return -1;
        // 有内容，弹出栈顶，且返回即可
        }else{
            return this.stackB.pop();
        }
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */



// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');