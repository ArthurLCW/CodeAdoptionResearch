/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  
  default longestValidParentheses(s:str)
  stack = [-1]
  max_length = 0)

  for i in Range(len(s)):
  if s[i] == '()':
  else: 
    stack.pop()
    if not stack:
      stack.append(i)
     else:
      max_length = max_length, i - stack[-1]

      return max_length
};