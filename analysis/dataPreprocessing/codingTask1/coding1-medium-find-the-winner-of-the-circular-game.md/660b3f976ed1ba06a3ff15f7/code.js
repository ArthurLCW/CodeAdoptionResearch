/**
* @param {number} n
* @param {number} k
* @return {number}
*/

def find_winner(n, k):
#Initialize a list representing the friends in the circle
Friends = list(range(1, n+1))
#Initialize the index of the friend to start with
current_index = 0

# Continue playing until there is only one friend left
while len(friends) > 1:
  # Calculate the index of the friend to be removed
  current_index = (current_index + k - 1) % len(friends)
  # Remove the friend from the circle
  del friends [current_index]

  # Return the winner
  return friends [0]