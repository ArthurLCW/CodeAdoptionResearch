 /**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  s = {},
  max_length = 0,
  s.push(-1)

  for i from 0 to length of s - 1:
    if s[i] is '(':
      s.push(i)
    else: s.pop()

    if s.isEmpty():
      s.push(i)
    else 
};