/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  var valid = 0;
  for (var i = 0; i < s.lenth; i++) {
    if (s[i] === '(' & s[i+1] === ')') {
      valid++;
    }
  }
  return valid;
}
  