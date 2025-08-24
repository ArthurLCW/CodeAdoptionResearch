/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  const ransomNote = new Map();
  const magazine = new Map();

  for (const char of ransomNote) {
    ransomNoteMap.set( char, (ransomNoteMap.get(chat) || 0) +1);
};
for (const char of magazine){
  magazineMap.set(char, (magazineMap.get(char) || 0) + 1) ;
}

for (const [char, count] of ransomNoteMap.entries()) {
  if (!magazineMap.has(char) || magazineMap.get(char) < count) {
    return false
  }
}
 return true;
}

const ransomNote = "aabb";
const magazine = "aabbc";
 