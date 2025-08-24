/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let longest = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (i == 0) continue;

    if (s[i] == "(" && s[i + 1] == ")") {
      counter += 2;
      if (longest == 0) {
        longest = counter;
      }
      i++;
    } else {
      if (counter > longest) {
        longest = counter;
      }
      counter = 0;
    }
  }
  return longest;
};