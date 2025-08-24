/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  const noteArray = ransomNote.split(' ');
  const magazineArray = magazine.split(' ');
  const magazineObject = {};
  
  for (const word of magazineArray) {
    !magazineObject[word] ? magazineObject[word] = 1 : magazineObject[word]++;
  }
  
  for (const word of noteArray) {
    if (!magazineObject[word]) return false;
    magazineObject[word]--;
  }
  return true;
}
