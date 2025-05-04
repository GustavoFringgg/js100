/*
主題：模擬 map 功能（Array + 資料轉換）
接收一個數字陣列，每個數字都乘以 2，回傳轉換後的新陣列。

doubleNumbers([1, 2, 3]);     // 回傳 [2, 4, 6]
doubleNumbers([0, -1, 5]);    // 回傳 [0, -2, 10]
doubleNumbers([]);            // 回傳 []

任務要求：
不要使用 .map()
必須用 for 迴圈＋ push() 自己組出新的陣列
每個數字都做「*2」後才放入新陣列

 */

const doubleNumbers = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

console.log(doubleNumbers([0, -1, 5]));
