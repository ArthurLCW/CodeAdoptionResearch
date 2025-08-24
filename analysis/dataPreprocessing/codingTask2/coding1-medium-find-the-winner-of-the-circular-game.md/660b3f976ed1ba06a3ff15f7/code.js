/**
* @param {number} n
* @param {number} k
* @return {number}
*/ Def find_winner(n, k):
Friends = list(range(1, n+1))
current_index = 0

while Len(friends) > 1:
  current_index = (current_index + k - 1) % len(friends)
  Del friends [current_index]
  return friends [0]

  /**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let queue = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (queue.length > 1) {
    for (let count = 1; count < k; count++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  return queue[0];
};