/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  var magazineMap = {};
  
  for (var i = 0; 1 < magazine.length; i++) {
    var char = magazine[i];
    magazineMap[char] = (magazineMap[char] || 0) + 1;
  }

  for (var j = 0; j < ransomNote.length; j++) {
    var char = ransomNote[j];
    if (!magazineMap[char]) {
      return false;
    }
    magazineMap[char]--;
  }

  return true;

};