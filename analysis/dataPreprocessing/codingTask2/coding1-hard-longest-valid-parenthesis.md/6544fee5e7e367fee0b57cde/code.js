/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let maxLen=0
  // Initilaize stack with base index -1
let stack = (-1);


for(let i= 0; i < s length; i++) {
  if (s{i) === '(') {
    // Push index of 'C( onto stack)
    stack. push(i);
    else 
    //Pop for matching ')'
    stack.pop();
    if (stack.lenght ===0) 
    // If stack is empty, push current index as base for
    
      