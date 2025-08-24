/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
    let friends = [];
    for (let i = 1; i <= n; i++) {
        friends.push(i);
    }
    
    let index = 0;
    while (friends.length > 1) {
        for (let count = 1; count < k; count++) {
            friends.push(friends.shift());
        }
        friends.shift();
    }
    
    return friends[0];
};