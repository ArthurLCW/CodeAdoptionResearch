/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  var length = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' && s[i+1] == ')') {
      length = length+2;
      i++;
    }
  }

  return length;

};