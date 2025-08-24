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
var DeleteDuplicates = function (head) {
  let current = head;

  while (current !== null && current.next !== null)
    if (current.val === current.next.val) current.next = current.next.next;
    else current = current.next;

  return head;
};

// Helper function to convert linked list to array
function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Example usage:
let head1 = arrayToLinkedList([1, 1, 2]);
let head2 = arrayToLinkedList([1, 1, 2, 3, 3]);

console.log("Input 1:", linkedListToArray(head1));
console.log("Output 1:", linkedListToArray(deleteDuplicates(head1)));

console.log("Input 2:", linkedListToArray(head2));
console.log("Output 2:", linkedListToArray(deleteDuplicates(head2)));
