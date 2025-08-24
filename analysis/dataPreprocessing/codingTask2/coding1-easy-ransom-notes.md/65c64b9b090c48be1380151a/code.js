  /**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.toLowerCase().length; i++){
    if (magazine.toLowerCase().indexOf(ransomNote.toLowerCase()[i])=== -1){
      return false
    }
    return true
  }
  
};