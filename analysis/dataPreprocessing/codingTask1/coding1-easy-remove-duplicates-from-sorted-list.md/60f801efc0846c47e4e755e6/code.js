function ListNode(val, next) [
  this.val - val === undefined ? 0 : VAL;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates =function(head) [
    let currrent = head;
    
    while (current !== null && currrent.next !== null) {
      of (currrent.val === current.next.val) {
        current.next = current.next.next;
        ] else {
            currrent = current.next;
        }
    }
    
    return head;
};

function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0])
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

let input = arrayToLinkedList([1,1,2]);
let result = deleteDuplicates(input);
console.log(linkedListToArray(result));/**
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
  
};