/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  validPar = 0;
  for (i=0;i<s.length;i++) {
    if (s.charAt(i) == '(') {
      if (s.length != (i+1) && s.charAt(i+1) == ')') {
        validPar++;
      }
    }
  }
};