/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let friends = [];
  for (let f = 1; f <= n; f++){
    friends.push(f);
  }

  while(friends.length >1){
    for (let count = 1; count < k; count++){
      friends.push(friends.shift());
    }
  
  friends.shift();
  } 
    return friends[0];
};