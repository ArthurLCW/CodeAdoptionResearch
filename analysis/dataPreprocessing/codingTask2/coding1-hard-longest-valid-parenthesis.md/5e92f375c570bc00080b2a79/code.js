/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let left = 0, right = 0, maxLenght = 0;

  if (s == null || s.length == 0) {
    return maxLenght;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }

    if (left === right) {
      maxLenght = Math.max(maxLenght, 2 * right);
    } else if (right > left) {
      left = right = 0
    }
  }

  left = right = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }

    if (left === right) {
      maxLenght = Math.max(maxLenght, 2 * left);
    } else if (left > right) {
      left = right = 0;
    }
  }

  return maxLenght;

  return maxLenght;

};