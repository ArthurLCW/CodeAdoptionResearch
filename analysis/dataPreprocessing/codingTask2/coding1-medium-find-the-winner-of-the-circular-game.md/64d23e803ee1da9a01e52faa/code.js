/**
* @param {number} n
* @param {number} k
* @return {number}
*/
function findTheWinner(n, k) {
  const queue = new Array(n).fill(null).map((_, i) => i + 1);

  let current = 0;

  while (queue.length > 1) {
    for (let i = 0; i < k; i++) {
      current = (current - 1 + queue.length) % queue.length;
    }

    queue.splice(current, 1);
  }

  return queue[0];
}

const winner1 = findTheWinner(5, 2);
const winner2 = findTheWinner(6, 5); 

console.log("Winner (Example 1):", winner1);
console.log("Winner (Example 2):", winner2);