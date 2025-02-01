var uniqueInOrder=function(iterable){
  let result = []
  let letter = iterable[0];
  // console.log(letter);
  for (const element of iterable) {
    if (element != letter ){
      result.push(letter);
    }
    letter = element;
  }
  if (iterable[iterable.length-1] !== undefined) {
    result.push(iterable[iterable.length-1])
  }
  return result;
}

console.log(uniqueInOrder(""));