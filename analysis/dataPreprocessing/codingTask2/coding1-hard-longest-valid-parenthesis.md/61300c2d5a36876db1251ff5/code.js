/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let count = 0;
  let stack = [-1];

  for(let i = 0; i < s.length; i++){
    //iterate through each index of s stopping if "(" is found
    if(s[i] === "("){
      stack.push(i);
    }
    else{
      stack.pop();
    }
    count = Math.max(count, i - stack[stack.length - 1]);
  }
  return count;
};