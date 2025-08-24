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
  let valeur_actuelle = head; 
  while (valeur_actuelle !== null){ // changed !==   (previously != )
    let zakgo = valeur_actuelle;
    while (zakgo.next !== null){ // changed !==   (previously != )
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