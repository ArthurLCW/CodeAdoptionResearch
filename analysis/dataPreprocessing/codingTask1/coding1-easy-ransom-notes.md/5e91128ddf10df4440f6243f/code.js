/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  letters = explode(magazine);
  if (letters in ransomNote) {
    return true;
  }
  else
  return false;
};