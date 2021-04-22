/**
 * * 题目名称：找不同
 * * 题目地址：https://leetcode-cn.com/problems/find-the-difference
 */

// * 思路：

// 给定两个字符串 s 和 t，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。

// 示例 1：
// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。

// 示例 2：
// 输入：s = "", t = "y"
// 输出："y"

// 测试用例
let test = ''

// 解题思路:
// 标签：哈希表
// 本题最容易想到的就是使用哈希表进行运算，遍历第一个字符串标记出现的字符数量，再遍历第二个减去出现的数量，直到遇到为 0 或者原哈希表就不存在的情况

// 标签：异或运算
// 除了上述方法外，会有一个更 tricky 的解法，就是使用字符（注意不是字符串）异或运算，尽管并没有降低时间复杂度，但也是一种开阔思路的解题方式
// 使用异或运算可以解题主要因为异或运算有以下几个特点：
// 一个数和0做XOR运算等于本身：a⊕0 = a
// 一个数和其本身做XOR运算等于 0：a⊕a = 0
// XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
// 故而在以上的基础条件上，将所有数字按照顺序做抑或运算，最后剩下的结果即为唯一的数字
// 时间复杂度：O(m+n)O(m+n)，mm 为字符串 ss 的长度，nn 为字符串t的长度


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  let map = new Map();
  for(let i = 0; i < s.length; i++){
      const hasS = map.get(s[i])
      map.set(s[i],hasS === undefined ? 1 : hasS + 1)
  }
  for(let j = 0; j < t.length; j++){
      const hasT = map.get(t[j])
      if(hasT === 0 || hasT === undefined){
          return t[j]
      }else{
          map.set(t[j], hasT - 1)
      }
  }
};

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');