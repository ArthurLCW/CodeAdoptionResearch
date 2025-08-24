/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxLen = 0;
  // Use a stack to track the indices of unmatched parentheses.
  // -1 handles edge cases where the substring starts at index 0
  let stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      // Pop for matching ')'
      stack.pop();
      if (stack.length === 0) {
        // If stack is empty, it means this ')' is unmatched.
        // Push its index to reset the base for future valid substrings.
        stack.push(i);
      } else {
        // Calculate current valid substring length
        const currentLen = i - stack[stack.length - 1];
        maxLen = Math.max(maxLen, currentLen);
      }
    }
  }

  return maxLen;
};
