/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  const charCnt = new Map();

  for (const char of magazine){
      charCnt.set(char,(charCnt.get(char) || 0) +1);
  }
  for(const char of ransomNote){
    if(!charCnt.has(char) || charCount.get(char) == 0){
      return false;
    }
    charCnt.set(char, charCnt.get(char) - 1);

  }

  return true;
};

