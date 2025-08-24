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
    let current = head;
    let result = [];
    while (current !== null && current.next !== null) {
        if (current.val !== current.next.val) {
            result.push(current.val);
        }
        current = current.next;
    }
    // Add the value of the last node
    if (current !== null) {
        result.push(current.val);
    }
    return result;
};

// Example 
let head = new ListNode(1);
head.next = new ListNode(2);

let result = deleteDuplicates(head);
