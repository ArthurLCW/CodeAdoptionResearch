/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  if(ransomNote.length>magazine.length) return false
  const word1 = [];
  
  for(i = 0; i < magazine.length; i++) {
    word1.push(ransomNote[i])
  }

  for(i = 0; i < ransomNote.length; i++) {
    // Loop through the letters in ransomNote and check if they
    // match a letter in magazine, if so pop from the the list

    
  }
  // At the end if the list is eempty then return true
  // else return false
};