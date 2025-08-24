/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
    let i = 0;
    let friends = Array.from({length: n}, (_, i) => i + 1);

    while (friends.length > 1) {
        i = (i + k - 1) % friends.length; 
        friends.splice(i, 1); 
    }

    return friends[0]; 
};