/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  if(!ransomNote || !magazine){
    return ' the value for ransomNote is:  ' + ransomNote + ' and the value for magazine is: ' + magazine
  }
  if(!magazine){
    return magazine +  'magazine is not valid '
  }

// initialise magazine mapping 
  const mapMag = new Map()

// evaluate characters of magazine and add it to mapMag
  for (const char of magazine){
    mapMag.set(char,(mapMag.get(char) || 0) + 1);
  }

  for(const char of ransomNote){
    // If the letter is not in magazine or not enough instances are left, return false
    if(!mapMag.has(char) || mapMag.get(char) === 0 ) {
      return false
    }
    mapMag.set(char, mapMag.get(char) - 1)
  }

  // If all letters in ransomNote can be constructed from magazine, return true
  return true
};