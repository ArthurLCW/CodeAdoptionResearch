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
  /*I don't remember how to code at all,  much less in JS which
  I've only learned from basic courses, so I will type my answer
  down instead. We need an array that compares all the numbers in it
  and erases all repeated numbers, so it's looking like a 
  for (){if ()} kind of scenario. Once the repeated values are erased
  they need to be sorted with a comparison algorithm, which is
  yet another for() if () condition where the numbers in the array are compared
  and re-arranged.
  */
  // if head is undefined/null, then return undefined/null 
  if (!head) return head;
    
  // Initialize current node as head of the list
  let current = head;

  // Loop until current node is not null
  while (current !== null && current.next !== null) {
    // If current node's value is the same as the next node's value
    if (current.val === current.next.val) {
      // Skip the next node (remove it from the list)
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  // Return the modified list
  return head;
};