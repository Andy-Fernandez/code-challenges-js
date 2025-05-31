const words = str.split(' ');
  console.log("Words: " + words)
  const hashtag = '#' + words.map(word => word[0].toUpperCase() + word.slice(1,word.length)).join('');