/**【Day 13 任務】
主題：合併兩個陣列（模擬 concat）

接收兩個陣列，回傳一個新陣列，包含兩個陣列的所有元素（依序合併）。 
mergeArrays([1, 2], [3, 4]);        // 回傳 [1, 2, 3, 4]
mergeArrays([], [5, 6]);            // 回傳 [5, 6]
mergeArrays(["a"], ["b", "c"]);     // 回傳 ["a", "b", "c"]

任務要求：
不要使用 concat() 或展開運算子 ...
必須用 for 迴圈把兩個陣列的元素一個一個 push 進去
*/

function mergeArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

console.log(mergeArrays([], [5, 6]));
