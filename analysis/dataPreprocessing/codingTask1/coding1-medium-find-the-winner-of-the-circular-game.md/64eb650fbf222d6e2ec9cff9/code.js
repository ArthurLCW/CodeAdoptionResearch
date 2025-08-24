/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++){
    arr[i] = i + 1;
  }
  let currNumber = 1;
  while (arr.length > 1) {
    currNumber = (currNumber + k) % n ;
    let index = arr.indexOf(currNumber)
    arr.pop(index);
  }
  return arr[0];
  
};