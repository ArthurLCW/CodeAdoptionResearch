/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  var charc= {}
  for (let char of magazine) {
    charc[char]= (charc[char] || 0) +1
  }

for (let char of ransomNote) {
  if(!charc[char]) {
    return false
  }
  charc[char]--;
}
  return true

};