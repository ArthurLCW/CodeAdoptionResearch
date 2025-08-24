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
  let arr= Array.from(head);
  arr= arr.filter((v,i,a)=>a.indexOf(v)==i).sort();
 // return arr.reduce((acc,curr) => new ListNode(curr,acc), null)
};