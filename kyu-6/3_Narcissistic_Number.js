// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  let valueString = String(value);
  let longitud = valueString.length;
  let acumulator = 0;
  for (let i = 0; i < longitud; i++) {
    const element = valueString[i];
    acumulator += element**longitud;
  }
  return acumulator === value ? true : false;
}

console.log(narcissistic(153));