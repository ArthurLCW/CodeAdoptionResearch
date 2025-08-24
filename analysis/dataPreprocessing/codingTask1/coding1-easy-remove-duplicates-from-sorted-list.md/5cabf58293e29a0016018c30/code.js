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
  if (!head) return head;
  let current = head;

  while (current && current.next) {
       if( current.val === current.next.val) {
        current.next = current.next.next;

       } else{
        current = current.next;
       }
  }

  return head;
};

const createLinkedListFromArray = function(arr) {
   let head = null;
    let current = null;

    for ( let i = 0; i < arr.length; i++){
       const newNode = new ListNode (arr[i]);
        
    }
}