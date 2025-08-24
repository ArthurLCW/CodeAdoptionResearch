/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  let count = 0;
   for (let i=0; i < s.length; i++){
    if (s[i] === '(' && s[i + 1] === ')') {
      count ++;
      i++;
    }
   }
   console.log (count/2);
};

