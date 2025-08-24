/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
    let friends = [];
    let curIndex = 0; 

    for (let i = 1; i <= n; i++) {
        friends.push(i);
    }

    while (friends.length > 1){
        let nextIndex = (curIndex + k - 1) % friends.length;
        friends.splice(nextIndex, 1);
        curIndex = nextIndex; 
    }

    return friends[0];
};