const maxNumber = (arr) => {
  let max = -Infinity;
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    // let
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

//reduce
const maxNumberByReduce = (arr) => {
  return arr.reduce((max, acc) => (acc > max ? acc : max), arr[0]);
};

console.log(maxNumberByReduce([1, 2, 3, 4, 5]));
