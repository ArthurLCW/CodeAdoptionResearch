/**
* @param {string} s
* @return {number}
*/
var isValid = function(s) {
  if (typeof(s) === 'string') {
    var i;
    var j = 0;
    for (i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        j++;
      } else if (s[i] === ')') {
        j--;
      }
      if (j < 0) {
        return false;
      }
    }
    if (j === 0) {
      return true;
    }
  }
  return false;
}

var longestValidParentheses = function(s) {
  if (typeof(s) === 'string') {
    var i;
    var j;
    var maxlen = 0;
    for (i = 0; i < s.length; i++) {
      for (j = i + 1; j < s.length; j++) {
        var substr = s.slice(i, j);
        if (isValid(substr) && substr.length > maxlen) {
          maxlen = substr.length;
        }
      }
    }
    return maxlen;
  }
  return 0;
};