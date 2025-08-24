/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let stack = [-1];
  let maxLenght = 0;

  if (s == null || s.length == 0) {
    return maxLenght;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLenght = Math.max(maxLenght, i - stack[stack.length -1])
      }
    }
  }

  return maxLenght;

};