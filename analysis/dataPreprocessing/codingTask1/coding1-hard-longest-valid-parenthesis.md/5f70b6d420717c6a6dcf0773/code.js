/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let stack = [];
  let maxLen = 0;
  let left = -1;

  for (let i = 0; i< s.lenght; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] ==='(') {
      if(stack.lenght ===0) {
        left =i;
      } else {
        stack.pop();
        max
};