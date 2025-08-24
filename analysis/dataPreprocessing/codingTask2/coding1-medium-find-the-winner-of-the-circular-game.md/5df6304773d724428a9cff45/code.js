/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let losers = [];

  for (let i = 1; i <= n; i++) {
    losers.push(i);
  }

  while (losers.length > 1) {
    for (let j = 1; j < k; j++) {
      var out = losers.shift();
      losers.push(out);
    }
    losers.shift();
  }
  return losers[0];
};