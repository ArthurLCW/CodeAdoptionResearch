/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let remainingBrackets; // stack of remaining characters
  let isValid = Array(s.length).fill(0); // results based on start character
  let longest = 0;
  // for each starting character, see if it can be a part of a valid set of brackets
  for(let i = 0; i <= s.length; i++){
    if(s[i] === ")"){
      if(s[remainingBrackets[remainingBrackets.length - 1]] == "("){
        isValid[i] = 1;
        isValid[remainingBrackets[remainingBrackets.length - 1]] = 1;
        remainingBrackets.pop();
      }
      else{
        remainingBrackets.push(i);
      }
    }
    let longest = 0;
    let current = 0
    for(let i = 0; i<= s.length; i++){

    }
  }
  return longest;
};