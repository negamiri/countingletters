function countingLetters(sentence){
  var sentenceSplit = sentence.split(' ').join('');
  var letterCount = {};
  var currentLetter = 0;

  for (var i = 0; i < sentenceSplit.length; i++){
    currentLetter = sentenceSplit[i];

    if (letterCount[currentLetter]) {
      letterCount[currentLetter].push(i);
    } else {
      letterCount[currentLetter] = [i];
    }

  }
  return letterCount;
}

console.log(countingLetters("lighthouse in the house"));