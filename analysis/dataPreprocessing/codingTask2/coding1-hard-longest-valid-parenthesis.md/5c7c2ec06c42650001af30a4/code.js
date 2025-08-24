/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let remainingBrackets = [-1]; // stack of remaining characters
  let longest = 0; // best current stack
  // for each starting character, see if it can be a part of a valid stack of brackets
  for(let i = 0; i <= s.length; i++){
    if(s[i] === "("){
      remainingBrackets.push(i);
    }
    else{
      remainingBrackets.pop();
      // if there are no brackets, that means we have more ) than (, i.e. a new start must be generated
      if(remainingBrackets.length === 0){
        remainingBrackets.push(i);
        current = 0;
      }
      // otherwise, this is still a valid stack so let's try to see if we can get some new stuff going
      else{
        let current = i - remainingBrackets[remainingBrackets.length - 1];
        longest = Math.max(current, longest);
      }
    }
  }
  return longest;
};