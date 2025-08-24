/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  const magazine_map = new Map();

  for (const char of magazine)
  {
    magazine_map.set(char, (magazine_map.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
        if (!magazine_map.has(char) || magazine_map.get(char) === 0) 
        {
            return false;
        } 
        else 
        {
            magazine_map.set(char, magazine_map.get(char) - 1);
        }
    }

  return true;

};