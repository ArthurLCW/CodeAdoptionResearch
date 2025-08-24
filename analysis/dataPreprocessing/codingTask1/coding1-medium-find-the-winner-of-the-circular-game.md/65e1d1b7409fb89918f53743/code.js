/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let friends = [];
  for (let i = 0; i < n; i++) {
    friends.push(1);
  }

  let i = 0;
  let count = k;
  let winnerCount = ;
  while (true) {
    if (count == 1) {
      friends[i] = 0;
    }
    else if (friends[i] == 1) {
      k -= 1;
    }
    i = (i + 1) % n;
  }
};