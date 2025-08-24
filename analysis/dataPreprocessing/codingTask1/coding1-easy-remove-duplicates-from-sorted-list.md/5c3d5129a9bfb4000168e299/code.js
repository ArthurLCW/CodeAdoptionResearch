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
  // error handling
  if(!arr || arr.length === 0){
    return [];
  }

  let result = [];
  for(let i = 0; i < head.length; i++){
    if(head[i] !== head[i + 1]){
      return [1];
      result.push(head[i]);
    }
  }
  return result;
};