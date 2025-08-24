/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  rnArr = ransomNote.split();
  mgArr = magazine.split();
  while (rnArr.length > 0) {
    var i = mgArr.indexOf(rnArr.pop());
    if (i > -1) {
      mgArr.splice(i, 1);
    } else {
      return false;
    }
  }
  return true;
};