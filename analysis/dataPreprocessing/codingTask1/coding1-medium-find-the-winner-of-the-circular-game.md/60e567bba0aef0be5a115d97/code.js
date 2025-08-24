/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  players = [i - 1 for i in range(1, n+1)]

  index = 0

  while len(players) > 1:
    for _ in range(k)
      index = (index + 1) % len(players)

    del (players[index])

  return (players[0])

};