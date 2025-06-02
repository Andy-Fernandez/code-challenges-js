// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
function pigIt(str){
  // puedo tener mas de una palabra:
  const array = str.split(' ')
  // * Podemos limpiar porque podemos teer muchos casos 
  const firstWords = array.map(el => {
    if (/^[!?.,]$/.test(el)) return el;
    return el.slice(1) + el.charAt(0) + 'ay'
  });
  return firstWords.join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));
console.log(pigIt('This is my string !'));
