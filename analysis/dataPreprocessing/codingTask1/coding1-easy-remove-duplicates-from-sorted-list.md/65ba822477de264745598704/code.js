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
let head=[1,1,2]
let numbers=[];
let x={}
head.forEach(function(val){if !x[val]{numbers.push(val);head[val] = true}