/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findWinner = function (n, k) {
  let friends = [];
  // Populate the friends array with all friends, numbered 1 through n
  for (let i = 1; i <= n; i++) {
    friends.push(i);
  }

  let index = 0;
  // Continue until only one friend remains
  while (friends.length > 1) {
    // Simulate counting k friends and removing the k-th friend from the array
    index = (index + k - 1) % friends.length;
    friends.splice(index, 1);
  }

  // The last remaining friend in the array is the winner
  return friends[0];
};