/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let friends = Array.from({length: n}, (_, i) => i + 1);
  let currentIndex = 0;

  while (friends.length > 1) {
    currentIndex = (currentIndex + k - 1) % friends.length;
    friends.splice(currentIndex, 1);
  }

  return friends[0];
 let n = 5;
  let k = 2;
  let winner = function(n, k)
  
}
 