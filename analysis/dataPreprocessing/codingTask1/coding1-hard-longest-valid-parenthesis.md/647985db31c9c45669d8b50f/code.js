/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  const longest =0;
  let start = true;
  let i=0;
  while(s[i]!='(' || i<s.length){
    i++;
  }
  while(i<s.length){
    if(start){
      if(s[i]===')'){
        longest++;
        start=false;
      }
    }else{

    }
  }

  return longest;
};