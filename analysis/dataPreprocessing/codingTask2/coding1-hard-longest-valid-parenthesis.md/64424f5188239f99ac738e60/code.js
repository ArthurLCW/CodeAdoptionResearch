/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  var longest = 0; // current estimate for longest substring
  var current = 0; // length of current substring
  let i = 0;
  while (i< s.length-1){ 
      if (s[i]==="(" & s[i+1]===")"){
        current += 2;
        i += 2;
      } else {
        longest = Math.max(longest, current);
        current = 0; // reset length
        i += 1;
      }
  }
  return Math.max(longest, current);
};
