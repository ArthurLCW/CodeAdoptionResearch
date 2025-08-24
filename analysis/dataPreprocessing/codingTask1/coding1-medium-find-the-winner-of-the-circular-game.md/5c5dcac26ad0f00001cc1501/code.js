/**
* @param {number} n
* @param {number} k
* @return {number}
*/
let k = 2;
let n = 5;


var findTheWinner = function(n, k) {
  let winner = 0;
  for (let i=2; i<= n; i++) {
    winner = (winner +k) % i;
  }
  console.log(winner+1)
  return winner + 1;
  
};
findTheWinner(n,k);