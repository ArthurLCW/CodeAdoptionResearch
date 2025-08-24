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
  let prev = null;
  while (item) {
    if (item.next && item.val == item.next.val) {
      let piv = item;
      let newItem = item.next;
      while (newItem && piv.val ===newItem.val) {
        piv.next = newItem.next;
        newItem = newItem.next;
      }
      if (prev) prev.next = piv.next;
      else head = piv.next
      item = piv.next
    } else {
      prev = item;
      item = item.next;
    }
  }
  return head;
};
console.log(JSON.stringify(deleteDuplicates()))