/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (typeof s !== "string") {
    return 0;
  }

  let maxLen = 0;
  let stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        const currentLen = i - stack[stack.length - 1];
        maxLen = Math.max(maxLen, currentLen);
      }
    }
  }

  return maxLen;
};
