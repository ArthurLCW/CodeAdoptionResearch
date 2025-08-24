/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) { // current, total
  // circular pattern
  return (n % k) + 1;
};

const n = 5;
let k

n = findTheWinner()