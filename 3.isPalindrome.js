/*
主題：判斷回文（基礎字串處理）
請你寫一個 JavaScript 函式：
輸入一個字串，判斷這個字串是不是「回文」。
「回文」就是正著念、反著念都一樣的字串。
要求：
不區分大小寫。
如果是回文，回傳 true；不是回文，回傳 false。
*/

const isPalindrome = (str) =>
  str.toLowerCase() === str.toLowerCase().split("").reverse().join("");

console.log(isPalindrome("hello"));
