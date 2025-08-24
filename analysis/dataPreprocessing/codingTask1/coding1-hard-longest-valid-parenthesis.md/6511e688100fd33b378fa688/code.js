function longestValidParentheses(s) {
  let stack = [-1]
  let maxL = 0

  for (let i=0; i<s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if(stack.length === 0) {
        stack.push(i)
      } else {
        maxL = Math.max(maxL, i-stack[stack.length-1])
      }
    }
  }
  return maxL
}

