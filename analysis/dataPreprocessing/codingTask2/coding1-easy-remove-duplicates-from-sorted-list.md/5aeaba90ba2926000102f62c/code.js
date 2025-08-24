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
  var current = head;
  while(current !== null && current.next !== null)
  {
    if(seen[current.val]) {
      seen[current.val]++;
    } else {
      seen[current.val] = 1;
    }

    if (seen[current.val] > 1) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};