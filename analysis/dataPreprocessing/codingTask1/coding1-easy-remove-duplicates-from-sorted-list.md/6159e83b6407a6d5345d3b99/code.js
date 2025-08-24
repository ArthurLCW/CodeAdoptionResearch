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
  let currentNumber = head;
  while(currentNumber && currentNumber?.next) {
    if (currentNumber.val === currentNumber.next.val) {
      currentNumber.next = currentNumber.next.next;
    } else {
      currentNumber = currentNumber.next
    }
  }
  return head;
  
};