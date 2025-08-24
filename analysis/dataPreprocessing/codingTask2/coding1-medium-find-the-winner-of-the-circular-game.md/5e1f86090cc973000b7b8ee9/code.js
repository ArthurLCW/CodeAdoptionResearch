/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  // Create an array of player identified by their number
  const players = [...Array(n/1)].map((_,i) => i + 1)

  let i = 0
  while (players.length > 1) {
    // Move the counter up by k - 1 around the circle
    i = (i + (k - 1)) % players.length
    // Remove the player from the array
    players.splice(i, 1)
  }

  // Remaining player wins
  return players[0]
};