/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  var longest = 0; // current estimate for longest substring
  var current = 0; // length of current substring
  var in_substring = false; // whether we are currently in a substring
  let 
  for (let i=0; i< s.length-1; i++){
    c = s[i]
    if (in_substring) {
      if (s[i]==="(" & s[i]===")"){

      }
    }
    console.log(c)
  }
  return 1;
  
};