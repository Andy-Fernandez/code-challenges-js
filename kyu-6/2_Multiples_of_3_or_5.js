// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
  if(number <= 0) return 0;

  let result = 0;
  for ( let i = 0; i < number; i++){
    if( i % 3 === 0 || i % 5 === 0){
      result += i;
    }
  }
  return result;
}

// Mathematical Optimization (O(1) Solution)
function sumMultiplesOf3And5(number) {
  if (number <= 0) return 0;

  function sumDivisibleBy(k) {
    const p = Math.floor((number - 1) / k);
    return k * (p * (p + 1)) / 2;
  }

  return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
}

console.log(solution(10));