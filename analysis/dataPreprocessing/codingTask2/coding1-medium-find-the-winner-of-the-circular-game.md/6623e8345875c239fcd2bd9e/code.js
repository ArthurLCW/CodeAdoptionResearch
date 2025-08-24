/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
 let friends = [];
 for(let i = 1; i <= n; i++){
  friends.push(i);

 }

 let curr_index = 0;

 while (friends.length > 1) {
  curr_index = (curr_index + m - 1) % friends.length;
  friends.splice(curr_index, 1);
 }
 
 return friends[0];
};