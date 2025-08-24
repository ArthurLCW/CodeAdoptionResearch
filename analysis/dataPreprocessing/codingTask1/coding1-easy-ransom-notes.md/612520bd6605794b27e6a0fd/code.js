/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {

const magazineLetter = new Map()
for(const char of magazine)
{
  magazineLetter.set(char, (magaineLetter.get(char) || 0) +1);

}

for(const char of ransomNote)
{
  if (!magazineLetter.has(char) || magazineLetter.get(char) === 0)
  {
return false;

  }
  
  magaineLetter 

}
  
};