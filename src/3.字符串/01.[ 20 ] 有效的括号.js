/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 
示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true

提示：
1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成


*/

// * 思路：栈!

// 不能忘了扫描过的左括号，它们等着被匹配，需要一个容器暂存，这个容器为什么是栈？

// 当遇到右括号时，我们期待它匹配掉「最近出现的左括号」，于是容器中的「最近出现的左括号」不用等待匹配了，
// 可以离开容器。它是「后进」的，现在「先出」了，所以是栈。

// 像 “对对碰”
// 匹配了就拿掉，如果最后清空了栈中的左括号，则有效。如果栈中还剩左括号未匹配，则无效。

// 复杂度
// 时间复杂度：O(n)O(n)。 遍历每个字符：O(n)O(n)，字符的入栈或出栈操作：O(1)O(1)
// 空间复杂度：O(n)O(n)。

// 代码
// const isValid = (s) => {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if (c == '{' || c == '[' || c == '(') { // 是左括号，入栈
//       stack.push(c);
//     } else {                                // 是右括号
//       if (stack.length == 0) {              // 此时栈空，无法匹配
//         return false;
//       }
//       const top = stack[stack.length - 1];  // 获取栈顶
//       if (top == '(' && c == ')' || top == '[' && c == ']' || top == '{' && c == '}') {
//         stack.pop();                        // 如果栈顶是对应的左括号，被匹配，出栈
//       } else {                              // 不是对应的左括号，无法匹配
//         return false;
//       }
//     }
//   }
//   return stack.length == 0; // 栈空，则所有左括号找到匹配；栈中还剩有左括号，则没被匹配
// };

// 解题思路
// 利用栈。
// 遇到左括号，一律推入栈中，
// 遇到右括号，将栈顶部元素拿出，如果不匹配则返回 false，如果匹配则继续循环。

// 为了提高性能, 在循环前进行这一步：let len = s.length是非常关键的，减少了计算次数。
// 为了提高执行时间，这一步if (len%2) return false是非常关键的，减少了不必要的计算。

// 代码
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     let arr = []
//     let len = s.length
//     if (len%2) return false
//     for (let i = 0; i < len; i++) {
//         let letter = s[i]
//         switch(letter) {
//             case "(": {
//                 arr.push(letter)
//                 break;
//             }
//             case "[": {
//                 arr.push(letter)
//                 break;
//             }
//             case "{": {
//                 arr.push(letter)
//                 break;
//             }
//             case ")": {
//                 if (arr.pop() !== "(") return false
//                 break;
//             }
//             case "]": {
//                  if (arr.pop() !== "[") return false
//                 break;
//             }
//             case "}": {
//                 if (arr.pop() !== "{") return false
//                 break;
//             }
//         }
//     }
//     return !arr.length
// };
// 如果字符串内加了空格，通过s.length%2将导致误判吧

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for(let i = 0; i < s.length; i++){
    let c = s[i];
    if(c == '(' || c == '{' || c == '['){
      stack.push(c)
    }else{
      if(stack.length === 0){
        return false
      }
      const top = stack[stack.length - 1];
      if(top == '(' && c == ')' || top == '{' && c == '}' || top == '[' && c == ']'){
        stack.pop()
      }else{
        return false
      }
    }
  }
  return stack.length === 0
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(isValid("{[())]}"));
console.timeEnd('执行用时');