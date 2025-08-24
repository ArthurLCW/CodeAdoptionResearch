/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  var count = 0;
  for(let i = 0; i < s.length-1; i++) {
    if(s[i]=='(' && s[i+1]==')') {
      count+=2;
    }
  }
  return count;
};