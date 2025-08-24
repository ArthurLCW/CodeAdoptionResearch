/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  
  for (var i = 0; 1 < magazine.length; i++) {
    var char = magazine[i]
    magazineMap[char] = (magazineMap[char] || 0) + 1;
  }
};