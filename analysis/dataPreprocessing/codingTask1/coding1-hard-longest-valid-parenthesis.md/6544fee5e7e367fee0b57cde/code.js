/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  
let stack = (-1);
let max = 0; 

for(let i= 0; i < s lenght; i++) {
  if (s{i) === '(') {
    stack. push(i);
    else 
    stack.pop();
    )else {
      max = Math.max(max, i-stack{stack.lenght - 1 )
      