
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Create a hash map to store the frequency of each letter in magazine
  let magazineLetters = {};

  // Populate the hash map with letters from magazine
  for (let letter of magazine) {
    if (magazineLetters[letter] === undefined) {
      magazineLetters[letter] = 1;
    } else {
      magazineLetters[letter]++;
    }
  }

  // Check each letter of the ransomNote against the hash map
  for (let letter of ransomNote) {
    // If the letter is not in magazine or not enough instances are left, return false
    if (!magazineLetters[letter] || magazineLetters[letter] <= 0) {
      return false;
    } else {
      // Decrease the count for the used letter
      magazineLetters[letter]--;
    }
  }

  // If all letters in ransomNote can be constructed from magazine, return true
  return true;
};