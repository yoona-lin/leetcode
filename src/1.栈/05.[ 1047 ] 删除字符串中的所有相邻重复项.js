/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
 */
//  给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
//  在 S 上反复执行重复项删除操作，直到无法继续删除。
//  在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 
//  示例：
//  输入："abbaca"
//  输出："ca"

//  解释：
//  例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。
//  之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
//   
//  提示：
//  1 <= S.length <= 20000
//  S 仅由小写英文字母组成。

// * 思路：栈,存放与匹配删除

// 方法一：栈
// 充分理解题意后，我们可以发现，当字符串中同时有多组相邻重复项时，我们无论是先删除哪一个，都不会影响最终的结果。
// 因此我们可以从左向右顺次处理该字符串。

// 而消除一对相邻重复项可能会导致新的相邻重复项出现，如从字符串 \text{abba}abba 中删除 \text{bb}bb 会导致出现
// 新的相邻重复项 \text{aa}aa 出现。因此我们需要保存当前还未被删除的字符。一种显而易见的数据结构呼之欲出：栈。
// 我们只需要遍历该字符串，如果当前字符和栈顶字符相同，我们就贪心地将其消去，否则就将其入栈即可。

// 复杂度分析
// 时间复杂度：O(n)O(n)，其中 nn 是字符串的长度。我们只需要遍历该字符串一次。
// 空间复杂度：O(n)O(n) 或 O(1)O(1)，取决于使用的语言提供的字符串类是否提供了类似「入栈」和「出栈」的接口。
// 注意返回值不计入空间复杂度。


// /**
//  * @param {string} S
//  * @return {string}
//  */
// var removeDuplicates = function(S) {
//   let len = S.length;
//   if(len == 1){
//     return S
//   }
//   let stack = [];
//   for(let i = 0; i < len; i++){
//     let lenStack = stack.length;
//     if(lenStack != 0 && stack[lenStack - 1] == S[i]){
//       stack.pop()
//     }else{
//       stack.push(S[i])
//     }
//   }
//   return stack.join("");
// };


// * 思路：两层循环,相同则退出单个循环,继续重复循环
/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
  let len = S.length;
  if(len == 1){
    return S
  }
  let stack = [];
  for(let i = 0; i < len; i++){
    let lenStack = stack.length;
    if(lenStack != 0 && stack[lenStack - 1] == S[i]){
      stack.pop()
    }else{
      stack.push(S[i])
    }
  }
  return stack.join("");
};

// 上面代码的变种，把右指针的内容搬运到左指针旁边，判断左指针相邻的元素是否相等，
// 相等的话，左指针回退2格，相当于丢弃。

// var removeDuplicates = function (S) {
//   S = S.split('')
//   let left = 0;
//   let right = 0;
//   while (S[right]) {
//     S[left] = S[right];
//     if (left > 0 && S[left] === S[left - 1]) {
//       left -= 2;
//     }
//     left++;
//     right++;
//   }
//   return S.splice(0, left).join('')
// };



// 测试用例
let test = ''

console.time('执行用时');
console.log(removeDuplicates("abbaca"));
console.timeEnd('执行用时');