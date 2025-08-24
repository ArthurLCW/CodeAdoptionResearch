/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  // return edge case
  if (ransomNote.length > magazine.length) {
    return false;
  }
  // setting up counters and directory
  let count = 0;
  let magazine_directory = new Map();

  // create dictionary of magazine chars and count "counter"
  for (i = 0; i < magazine.length; i++) {
    magazine_directory.set(magazine.charAt(i)),
    magazine_directory.get(magazine.charAt(i)) || 0 +1;
  }
  // looping through the note
  for (i = 0; i < ransomeNote.length; i++) {
    let curr = ransomeNote.charAt(i)
    if (magazine_directory.has(curr)) {
      let count2 = magazine_directory.get(curr);
      // reduce char counter/ delete from dictionary if it's 1
      if (count2==1) {
        magazine_directory.delete(curr);
      }
      else {
        magazine_directory.set(curr, count2 - 1);
      }
      count+=1;
      }
      
    }

  }
  return count - ransomeNote.length == 0
};