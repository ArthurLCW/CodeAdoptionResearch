/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let ln = 0 
  let maxln = 0
  for(let i=0; i < s.length; i++){
    if(s[i] == '(' && s[i+1] == ')') ln+=2
    else if(!(s[i] == ')' && s[i+1] == '('))ln = 0
    if (ln > maxln ) maxln = ln
  }
  return maxln
};