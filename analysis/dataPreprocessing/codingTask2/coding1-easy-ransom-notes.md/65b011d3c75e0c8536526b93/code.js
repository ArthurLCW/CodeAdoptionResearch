/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  let hashMap = {};

  for(let iterator = 0; iterator < magazine.length; iterator++) {
    if(hashMap[magazine[iterator]] === undefined) {
      hashMap[magazine[iterator]] = 1;
    } else {
      hashMap[magazine[iterator]]++
    }
  }

  for(let iterator = 0; iterator < ransomNote.length; iterator++) {
    if(!hashMap[ransomNote[iterator]] || hashMap[ransomNote[iterator]]<=0) {
      return false;
    } else {
      hashMap[ransomNote[iterator]]--;
    }
  }

  


  return true;
};