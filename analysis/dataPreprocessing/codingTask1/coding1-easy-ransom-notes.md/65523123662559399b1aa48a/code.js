/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  const charcount = new Map();

  for (const char of magazine) {
    charCount.set(char,
(charCount.get(char) || 0) + 1);

  }
    for (const char of ransomNote) {
      if (!charCount.has(char) ||
charCount.get(char === 0) {
            return false;
          }
          charCount.set(char,
          charCount.get(char) - 1);
    }
            return true;
    };