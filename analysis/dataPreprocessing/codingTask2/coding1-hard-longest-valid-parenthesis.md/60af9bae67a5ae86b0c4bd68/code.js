/**
* @param {string} s
* @return {number}
*/


var longestValidParentheses = function(s) {
  const l = s.length;
  const stack = []

  for (let i = 0; i < l; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop(); 
    }
  }
  let result = 0, last = l;
  while(stack.length) {
    const now = stack.pop();
    result = Math.max(result, last - now - 1);
    last = now;
  }
  return Math.max(result, last);

};