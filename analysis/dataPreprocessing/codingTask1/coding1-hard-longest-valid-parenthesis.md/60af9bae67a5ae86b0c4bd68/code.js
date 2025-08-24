/**
* @param {string} s
* @return {number}
*/
const str1 = 

var longestValidParentheses = function(s) {
  const l = str.length;
  const stack = []
  for (let i = 0; i < l; i++) {
    if (str[i] === '(')
      stack.push(i);
    else {
      stack.push(i);
    
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