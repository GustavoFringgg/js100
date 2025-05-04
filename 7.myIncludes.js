//myIncludes([1, 2, 3], 2);      // 回傳 true

const myIncludes = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

console.log(myIncludes([1, 4, 3], 2));
