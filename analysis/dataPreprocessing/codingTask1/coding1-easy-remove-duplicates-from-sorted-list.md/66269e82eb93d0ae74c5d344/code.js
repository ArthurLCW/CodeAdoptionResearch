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
  // more familiar with the C langage
  // i tried to reproduce my solution of this problem that i already solved in the past weeks
  let valeur_actuelle = head; 
  while (valeur_actuelle != null){
    let zakgo = valeur_actuelle;
    while (zakgo.next != null){
      if(zakgo.next.val === valeur_actuelle.val){
        zakgo.next = zakgo.next.next;
      } else {
        zakgo = zakgo.next;
      }
    }
    valeur_actuelle = valeur_actuelle.next;
  }
  return head;
};