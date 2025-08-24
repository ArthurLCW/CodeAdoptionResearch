/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let friends = [];

  for (let h = 1; h <= n; h++){
    friends[h-1] = h;
  }

  while (friends.length > 1){
    for (let j = 1; j < k; j++){
        friends.push(friends.shift());
    }
    friends.shift();
  }

  return friends[0];
};