/**
 * Definition for singly-linked list.
 * function ListNode(nodeValue, nextNode) {
 *     this.val = (nodeValue === undefined ? 0 : nodeValue)
 *     this.next = (nextNode === undefined ? null : nextNode)
 * }
 */

/**
 * Removes duplicates from a sorted linked list such that each element appears only once.
 * @param {ListNode} headNode - The head of the linked list.
 * @return {ListNode} - The head of the list after removing duplicates.
 */
var deleteDuplicates = function(headNode) {
    if (!headNode || !headNode.next) return headNode;

    let traversalNode = headNode; 
    while (traversalNode.next !== null) {
        if (traversalNode.val === traversalNode.next.val) {
            traversalNode.next = traversalNode.next.next;
        } else {
            traversalNode = traversalNode.next;
        }
    }

    return headNode;
};

