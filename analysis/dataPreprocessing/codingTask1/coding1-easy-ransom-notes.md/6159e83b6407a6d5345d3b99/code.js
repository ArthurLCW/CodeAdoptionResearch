/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  if(!ransomNote){
    return ransomNote
  }
  if(!magazine){
    return magazine
  }

  const mapMag = new Map()

  for (const char of magazine){
    mapMag.set(char,(mapMag.get(char) || 0) + 1);
  }

  for(const char of ransomNote){
    if(!mapMag.has(char) || mapMag.get(char) === 0 ) {
      return false
    }
    mapMag.set(char, magazineMap.get(char) - 1)
  }

  return true
};