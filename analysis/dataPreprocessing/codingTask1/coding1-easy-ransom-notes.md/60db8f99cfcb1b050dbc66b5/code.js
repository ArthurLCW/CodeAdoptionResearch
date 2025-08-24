/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  for (let char of ransomNote){
    if(magazine.indexOf(char) == -1 ){
      return false
    }
  }

};