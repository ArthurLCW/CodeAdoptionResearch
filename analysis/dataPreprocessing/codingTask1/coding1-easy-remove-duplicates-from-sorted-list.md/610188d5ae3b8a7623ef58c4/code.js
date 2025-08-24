class ListNode/**
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
class ListNode{
  constructor(val){
    this.val= val;
    this.next = null;

  }
}
function deleteDuplicates(head)
{
  let current = head;

  while(current!==null && current.next !==null)
  {
    if (current.val===current.next.val){
      current.next=current.next.next;

    } else {current=current.next}
  }
}
return head;

let head = new.ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

console.log("Original sorted linked List");
printlist(head)

deleteDuplicates(head);

console.log("sorted linked list without duplicates")
printlist(head)

function printlist(he)
var deleteDuplicates = function(head) {
  
};