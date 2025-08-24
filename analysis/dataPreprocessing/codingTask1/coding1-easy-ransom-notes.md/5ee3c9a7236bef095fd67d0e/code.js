/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  
  let magazineMap = {};
  for (let char of magazine) {
    if (!magazineMap[char]) {
      magazineMap[chat] = 0;
    }
    magazineMap[char]++;
  }
};