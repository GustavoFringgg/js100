/**
 主題：模擬 .find() 功能（Array + 條件搜尋）

請你寫一個 JavaScript 函式：
接收一個數字陣列，找出第一個小於 0 的數字，並回傳它。
如果陣列中沒有符合條件的數字，請回傳 null。

findNegative([3, 5, -2, 4]);    // 回傳 -2
findNegative([1, 2, 3]);        // 回傳 null
findNegative([]);              // 回傳 null

任務要求：
不可以使用 .find()（我們要手刻邏輯）

用 for 迴圈與 if 判斷

找到第一個符合條件就 return，沒找到整個比完就回傳 null
 */

function findNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return arr[i];
  }
  return null;
}

const a = [1, 2, 3];
console.log(a.find((a) => a > 1));

// console.log(findNegative([1, 2, 3]));
