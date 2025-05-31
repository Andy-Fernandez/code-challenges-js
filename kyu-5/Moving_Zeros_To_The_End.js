// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// First option
function moveZeros(arr) {
  const filteredArr = [];
  let zeros = 0;

  for (const el of arr) {
    if (el !== 0) {
      filteredArr.push(el);
    } else {
      zeros++;
    }
  }

  return [...filteredArr, ...Array(zeros).fill(0)];
}

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

// Second option with filter
function moveZeros2(arr) {
  const filterArr = arr.filter(el => el !== 0)
  const zerosCount = arr.length - filterArr.length;
  return [... filterArr, ...Array(zerosCount).fill(0)];
}

console.log(moveZeros2([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros2([1,2,0,1,0,1,0,3,0,1]));