/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
let temp = [];
let max = 0;
temp.push(-1)
for(let i=0; i<s.length;i++){
  if(s[i] === '('){
    temp.push(i);
  }else{
    temp.pop();
    if(temp.length===0){
      temp.push(i)
    }else{
      max = Math.max(max, i - temp[temp.length - 1]);
    }
  }
  return max;
}

};