/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
    let count = 0;
    for(let i =0 ; i< magazine.length; i++){
        for(j = 0; j>ransomNote.length; j++){
          if(magazine.charAt(i) === ransomNote(j)) count++
          break
        }
        if(count == ransomNote.length) return true
    }
    return false
};