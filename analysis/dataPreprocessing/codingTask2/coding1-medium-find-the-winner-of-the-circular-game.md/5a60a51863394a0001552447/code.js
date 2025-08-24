/**
 * Determines the winner in a game where players take turns removing objects
 * from a circular queue, following specific removal rules.
 *
 * @param {number} n - The total number of objects in the game.
 * @param {number} k - The maximum number of objects a player can remove at a time.
 * @returns {number} - The index (1-based) of the remaining object (the winner).
 */
function findTheWinner(n, k) {
  // Create a circular queue using an array and modulo operation.
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  let current = 0; // Index of the player who will make the next move.

  // Simulate the game by repeatedly removing elements based on `k`.
  while (queue.length > 1) {
    const steps = k - 1; // Number of elements to move before removing.

    // Handle potential overflow in circular queue using modulo.
    current = (current + steps) % queue.length;

    // Remove the element at the current index.
    queue.splice(current, 1);
  }

  // The remaining element is the winner.
  return queue[0];
}