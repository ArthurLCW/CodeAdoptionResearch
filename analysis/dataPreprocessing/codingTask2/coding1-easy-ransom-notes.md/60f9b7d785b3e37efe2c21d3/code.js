/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  for(let i=0; i<ransomNote.length; i++) {
    if(ransomNote[i] == magazine[i]) {
      return true;
    } else {
      return false;
    }
  }
};