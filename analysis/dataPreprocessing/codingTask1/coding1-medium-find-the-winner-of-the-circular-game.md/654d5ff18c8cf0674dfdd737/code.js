/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  if(n == 1) return 1;
  else {
        const prevWinner = findWinnerPosition(n - 1, k);
        return (prevWinner + k) % n;
  }
};

function findWinner(n, k) {
    const winningPosition = findWinnerPosition(n, k);
    return winningPosition + 1;
}