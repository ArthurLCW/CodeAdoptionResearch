/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  let counter = new Map();

  for (let c of magazine) 
  {
    counter.set(c, (counter.get(c) || 0) + 1);
  }

  for (let c of ransomNote) 
  {
    if (counter.has(c) && counter.get(c) > 0) {
      counter.set(c, counter.get(c) - 1);
    }
    else
    {
      return false;
    }
  }
  return true;
};