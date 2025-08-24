head = [1, 2, 5, 5, 8, 6, 8, 9]

var deleteDuplicates = function(head) {
  let present = head;
  while (present && present.next){
    if (present.val ===
    present.next.val){
      present.next = present.next.next;
    } else {present = present.next;}
  }
  return head;
};