/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var chars = {},
    len = magazine.length,
    i;
  for (i = 0; i < len; i++) chars[magazine[i]] = (chars[magazine[i]] || 0) + 1;
  len = ransomNote.length;
  for (i = 0; i < len; i++) {
    if (chars[ransomNote[i]]) chars[ransomNote[i]]--;
    else return false;
  }
  return true;
};
