/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s.length == 0 || s.length == 1) {
    return 0;
  }
  counter = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == ")" && s[i - 1] == "(") {
      counter += 2;
    }
  }
  return counter;
};
