/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let head = { val: 1};
  let current = head;
  for (let i = 2; i <= n ; i++){
    current.next ={ val: 1};
    current = urrent.next
  }

  current.next = head;

  while(current.next != 0 )
};