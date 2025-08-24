/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {

  let magazineLetters = [];

  // Populate the hash map with letters from magazine
  for (let letter of magazine) {
    if (magazineLetters[letter] === undefined) {
      magazineLetters[letter] = 1;
    } else {
      magazineLetters[letter]++;
    }
  }

 for (let letter of ransomNote) {
    // If the letter is not in magazine or not enough instances are left, return false
    if (!magazineLetters[letter] || magazineLetters[letter] <= 0) {
      return false;
    } else {
      // Decrease the count for the used letter
      magazineLetters[letter]--;
    }
  }

  return true;
};