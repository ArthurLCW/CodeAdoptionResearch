/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let magazineLetters = {};

  for (let letter of magazine) {
    if (magazineLetters[letter] === undefined) {
      magazineLetters[letter] = 1;
    } else {
      magazineLetters[letter]++;
    }
  }

  for (let letter of ransomNote) {
    if (!magazineLetters[letter] || magazineLetters[letter] <= 0) {
      return false;
    } else {
      magazineLetters[letter]--;
    }
  }

  return true;
};