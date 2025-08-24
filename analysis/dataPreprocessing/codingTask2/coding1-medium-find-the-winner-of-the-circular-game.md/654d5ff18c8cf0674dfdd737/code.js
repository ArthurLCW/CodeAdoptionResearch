/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let arr = [];
  // Populate the queue with all friends, numbered 1 through n
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  // Continue until only one friend remains
  while (arr.length > 1) {
    // Simulate counting k friends and moving each to the back of the queue
    for (let count = 1; count < k; count++) {
      arr.push(arr.shift());
    }
    // The k-th friend is removed from the game
    arr.shift();
  }

  // The last remaining friend in the queue is the winner
  return arr[0];
}