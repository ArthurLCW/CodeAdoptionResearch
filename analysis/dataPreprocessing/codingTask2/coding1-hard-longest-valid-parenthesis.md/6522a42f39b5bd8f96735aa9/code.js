/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let parenthesesStack = [-1]
  len = 0

  for(let i = 0; i < s.length; i++){
    if(s[i] === '(') parenthesesStack.push(i)
    else{
      parenthesesStack.pop()
      if(parenthesesStack.length == 0) parenthesesStack.push(i)
      else len = Math.max(len, i - parenthesesStack[parenthesesStack.length-1])
    }
  }
  return len
};