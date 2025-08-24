/**
* @param {string} s
* @return {number}

*/
let number = 0
var longestValidParentheses = function(s) {
  for(let i = 0; i < s.length - 1; i++){
    if(s[i] == "(" && s[i+1] == ")"){
      number += 2
    }
  }
  return number;
  
};