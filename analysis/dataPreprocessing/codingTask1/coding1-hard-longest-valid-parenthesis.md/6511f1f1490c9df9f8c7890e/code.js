/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let ln = 0 
  let maxln = 0
  for(let i=0; i < s.length-1; i++){
    if(s[i] == '(' && s[i+1] == ')') ln+=2
    if (ln > maxln ) maxln = ln
    else ln = 0
  }
  return maxln
};