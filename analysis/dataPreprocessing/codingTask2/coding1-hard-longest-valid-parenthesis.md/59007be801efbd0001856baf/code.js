var Open = '(';
var Close = ')';

/**
* @param {string} s
* @return {number}
*/
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
      longest = Math.max(longest, current);
    }
  }

  return longest;
};

var switchChar = function(c) {
  if (c === Open)
    return Close;
  return Open;
}