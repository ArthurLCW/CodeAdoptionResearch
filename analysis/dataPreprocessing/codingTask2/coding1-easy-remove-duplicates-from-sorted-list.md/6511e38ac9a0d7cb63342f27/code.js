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
  if (!head) return head; // handle empty list

  let current = head;

  // go through list
  while (current && current.next){
    // if current element value = next element value
    if (current.val === current.next.val) {
      // skip next element
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

// sort final list (I do not know how to make it work in JavaScript)
// head = Array.from(head);
// head.sort();

// return new list
return head;
};