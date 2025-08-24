  /**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  return [...ransomNote].every(char=>magazine.toLocaleLowerCase().includes(char.toLocaleLowerCase()))
  
};