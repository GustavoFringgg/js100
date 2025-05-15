/**主題：列出物件所有 key（Object.keys 的手刻練習）

請你寫一個 JavaScript 函式：

接收一個物件，回傳該物件中所有 key 組成的陣列。 

getObjectKeys({ name: "Adam", age: 30 });   // 回傳 ["name", "age"]
getObjectKeys({});                          // 回傳 []
getObjectKeys({ a: 1, b: 2, c: 3 });         // 回傳 ["a", "b", "c"]

任務要求：
不要使用 Object.keys()

用 for...in 迴圈把 key 一個個收集起來

回傳 key 組成的新陣列
*/

//取 key
const getObjectKeys = function (object) {
  let result = [];
  for (let item in object) {
    result.push(item);
  }
  return result;
};

//取值
const getObjectKeys = function (object) {
  let result = [];
  for (let item in object) {
    result.push(object[item]);
  }
  return result;
};

const a = getObjectKeys({ a: 1, b: 2, c: 3 });
console.log(a);
