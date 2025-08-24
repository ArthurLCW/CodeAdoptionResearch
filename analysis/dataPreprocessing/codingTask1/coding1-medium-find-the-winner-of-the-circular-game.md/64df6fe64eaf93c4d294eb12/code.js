/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let friends= Array.from({ length: n},) (_, i)=> i+1);
  let currentfriendIndex= 0
};

while (friend.length> 1){
  currentfriendIndex = (currentfriendIndex +k-1) % friends.length;
  friends.splice(currentFriendInde, 1);
}

return friends[0]
}