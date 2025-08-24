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
var deleteDuplicates = function (head) {
  var res = [];

  if (head.val && head.next && head.val !== head.next.val) {
    res.push(head.val);
  }
  return head.next ? deleteDuplicates(head.next) : null;
};
