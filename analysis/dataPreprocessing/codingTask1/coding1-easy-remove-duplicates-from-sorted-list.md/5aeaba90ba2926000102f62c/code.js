/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*   this.val = (val===undefined ? 0 : val)
*   this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {
  var seen = {}
  var current = head.next
  var prev = null
  while(current !== null)
  {
    seen[current.val] = seen[current.val] ? seen[current.val]++ : 1
    if (seen[current.val] > 1) {
      prev.next = current.next
    }
    prev = current
    current = current.next
  }
};