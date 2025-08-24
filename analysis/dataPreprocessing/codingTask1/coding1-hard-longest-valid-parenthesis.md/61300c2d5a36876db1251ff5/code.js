/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let count;
  for(let i =0; i< s.length; i++){
    //iterate through each index of s stopping if "(" is found
    if(s[i] == "("){
      //search the next index of s and if it is equal to ")" count++
      if(s[i+1] == ")"){
        count++;
      }
    }
  }
  return count;
};