/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  var v =0;

  Syster(s);

  for(i=0,i<s.length;i++;){
    if(s.charAt(i) == "("  && (v % 2) != 1)
      v++;
  }
  return v;
};