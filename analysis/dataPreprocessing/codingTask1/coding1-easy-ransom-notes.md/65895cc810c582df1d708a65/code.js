/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  const magazineMap =new Map();
  for (const char of magazine) {
    const count = magazineMap.get(char) || 0;
    magazineMap.set(char, count+1);
  }

  for (const char of ransomNote) {
    const count = magazineMap.get(char);
    if (count === undefined || count === 0) 
    {
      return false;
    }
    magazineMap.set(char, count - 1);
  }
  return true;
};