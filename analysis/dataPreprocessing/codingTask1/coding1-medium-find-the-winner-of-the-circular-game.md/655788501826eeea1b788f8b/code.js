/**
 * function findWinner(n,k) {
 * let friends = Array.from ({length:n },(_, i) => i+1);
 * let currentindex=0;
 * let explanation=[];
 * while(friends.length>1){
 * currentIndex=(currentIndex +k -1)% friends.length;
 * let removedFriend=riends[currentIndex];
 * friends.splice(currentIndex,1)
 * }
 * return friends[0];
 * }
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  
};