// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  // console.log(str);
  if (str.trim() === '') {
    return false;
  }
  const words = str.split(/\s+/);
  // console.log(words)
  const hashtag = '#' + words.map(word => word[0].toUpperCase() + word.slice(1,word.length)).join('');
  console.log(hashtag);
  return hashtag;
}

export default generateHashtag;

const testInputs = [
  "I need a hashtag",
  "",
  " ".repeat(200),
  "Do We have A Hashtag",
  "Codewars",
  "Codewars Is Nice",
  "Codewars is nice",
  "code" + " ".repeat(140) + "wars",
  "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat",
  "a".repeat(139),
  "a".repeat(140)
];

testInputs.map(test => generateHashtag(test));
