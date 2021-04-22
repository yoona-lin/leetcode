/**
 * * 题目名称：字符串中的第一个唯一字符
 * * 题目地址：https://leetcode-cn.com/problems/first-unique-character-in-a-string
 
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：
s = "leetcode"
返回 0

s = "loveleetcode"
返回 2

提示：你可以假定该字符串只包含小写字母。

*/

// 5种数据结构实现17种解法，封装位 懒队列类，原生实现贪心算法完成更优解
// 夸张！！
// 作者：mantoufan
// 链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string/solution/wei-zheng-ze-ha-xi-ji-he-dui-lie-yuan-sh-bupy/

// 一 哈希表
// 解题思路
// 遍历字符串，哈希表统计字符出现次数。再遍历字符串，找出现次数为1的字符
// 代码
// Array：Uint16值[0, 65535]过测试用例足够，实际应大一些，下同

// var firstUniqChar = function(s) {
//     let h = new Uint16Array(26), i = s.length
//     while (i--) h[s.charCodeAt(i) - 97]++
//     i = -1
//     while (++i < s.length) 
//         if (h[s.charCodeAt(i) - 97] === 1)
//             return i
//     return -1
// };



// * 思路：
// 双重for循环
// 一重for循环 + indexOf
// 哈希表 + indexOf
// 创造 set函数对象，查找哈希表，返回第一个


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  // 出问题
  // let len = s.length;
  // if(len === 1){
  //   return 0
  // }
  // let i = 0, j = 1;
  // while(i < len - 1){
  //   let item = s[i]
  //   while(j < len){
  //     if(item == s[j]){
  //       break;
  //     }else{
  //       j++;
  //       if(j === len){
  //         return i
  //       }
          // 后面部分还会继续比较，出大问题
  //     }
      
  //   }
  //   i++
  // }
  // return -1

  // 出问题
  // let setArr = new Set(s);
  // console.log(setArr)

  // 通过
  const map = new Map();
  for(let i = 0; i < s.length; i++){
    if(map.has(s[i])){
      map.set(s[i], -1) // 重复出现的都为-1
    }else{
      map.set(s[i], i)
    }
  }
  console.log(map.size)
  for (let key of map.values()) {
    //遍历值，不为-1的第一个
    if(key > -1){
      return key
    }
  }
  return -1
};



// 测试用例
let test = ''

console.time('执行用时');
console.log(firstUniqChar("aabasd"));
console.timeEnd('执行用时');