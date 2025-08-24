/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let friends = [];
  for (let i = 0; i < n; i++) {
    friends.push(1);
  }

  let i = 0;
  let count = k;
  let winnerCount = n;
  while (true) {
    if (winnerCount == 1 && friends[i] == 1) {
      return i + 1;
    } else if (count == 1 && friends[i] == 1) {
      friends[i] = 0;
      winnerCount -= 1;
      count = k;
    } else if (friends[i] == 1) {
      count -= 1;
    }
    i = (i + 1) % n;
  }
};
