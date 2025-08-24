/**
* @param {string} s
* @return {number}
*/
var Open = "(";
var Close = ")";

var longestValidParentheses = function(s) {
  let longest = 0;
  let checkChar = Open;
  let current = 0;
  for(let i = 0; i < s.length; i++) {
    if(s.charAt(i) == checkChar){
      current++;
      switchChar(checkChar);
    }
    else {
      checkChar = Open;
    }
  }
};