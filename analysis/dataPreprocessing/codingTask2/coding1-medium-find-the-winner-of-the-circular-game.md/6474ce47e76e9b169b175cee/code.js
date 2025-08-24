/**
* @param {number} n
* @param {number} k
* @return {number}
*/

var findTheWinner = function (n, k) {
  let friends = [];
  //naming this friends to make it easier to remember what it is for

  for (let i = 1; i <= n; i++) {
    //start 'i' at one. 'i' is always less than 'n'
    //'n' = the maximum amount of friends in the group
    //'i' is increased. does this connect to the 'k'?
    friends.push(i)
    //does this ACTUALLY push the array?
  }

  while (friends.length > 1) { //while the number of friends in the group is more than 1...
    for (let count = 1; count < k; count++) { //let the amount initally counted be equal to 1.
      //amount counted is always less than k, but it increases(?) 
      //(would it not decrease if it was the count for every friend removed?)

      friends.push(friends.shift());
    }// what does this do? does it shift the no. of friends in the array
    friends.shift();
  }

  return friends[0]
}
  // var i = 1;
  // //Math.
  // i+k - 1
  // //In which I (our currently selected friend) is initally equal to 1
  // //K is equal to the number of friends going back
  // //The subrtractiong of 1 removes that friend from the group
  // //??