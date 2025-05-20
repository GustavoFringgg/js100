// 【Day 12 任務】
// 主題：列出物件所有 value（模擬 Object.values）
// 請你寫一個 JavaScript 函式：
// 接收一個物件，回傳該物件中所有 value 組成的陣列。
// getObjectValues({ name: "Adam", age: 30 });   // 回傳 ["Adam", 30]
// getObjectValues({});                          // 回傳 []
// getObjectValues({ a: 1, b: 2, c: 3 });         // 回傳 [1, 2, 3]

function getObjectValues(obj) {
  let result = [];
  for (i in obj) {
    result.push(obj[i]);
  }
  return result;
}
console.log(getObjectValues({ a: 1, b: 2, c: 3 }));
