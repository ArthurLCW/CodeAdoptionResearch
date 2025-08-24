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
  let item = head;
  
  while (item !== null && item.next !== null) {
    if (item.val === item.next.val) {
      item.next = item.next.next;
    } else {
      item = item.next;
    }
  }
  return head;
};