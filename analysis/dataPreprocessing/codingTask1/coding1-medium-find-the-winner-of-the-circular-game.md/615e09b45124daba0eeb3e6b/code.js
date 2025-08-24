/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  if (n===1){
    return 0;
  } else {
    return (findTheWinner(n - 1, k) + k)%n;
  }
};