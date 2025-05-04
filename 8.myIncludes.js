//主題：filter 過濾大於 10 的數字（Array + 條件判斷）
//接收一個「數字陣列」，回傳「所有大於 10 的數字組成的新陣列」
/**
 * filterGreaterThanTen([5, 12, 8, 20, 3]);   // 回傳 [12, 20]
filterGreaterThanTen([1, 2, 3]);           // 回傳 []
filterGreaterThanTen([]);                 // 回傳 []

不可以用 .filter()（我們要手刻邏輯）
用 for 迴圈與 if 判斷
自己把結果「一個一個推進新陣列」然後回傳

*/

const filterGreaterThanTen = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(filterGreaterThanTen([5, 12, 8, 20, 3]));
