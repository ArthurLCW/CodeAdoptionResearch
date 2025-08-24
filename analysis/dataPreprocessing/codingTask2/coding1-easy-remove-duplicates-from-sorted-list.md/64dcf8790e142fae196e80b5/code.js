/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
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
The code below is written by you in the previous page. You may use it as a reference too.

Codes Written by Yourself in Previous Page
Coding Task Description
123456789101112131415161718
Test ResultTestcase
Run Your TestcaseRun Addidtional Testcases
There will be running results once you run your code.
Go to next page