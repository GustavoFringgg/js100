const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumArray([]));

//reduce
const sumArrayy = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};
console.log(sumArrayy([1, 2, 3, 4]));
