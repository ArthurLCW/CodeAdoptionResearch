/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
    cur_pos = 1;
    step = k;
    size = n;
    field_arr = n*[1]
    while n > 1:
      i = k
      x = 0
      while i > 0:
        if field_arr[x+cur_pos] == 1:
          field_arr[x+cur_pos] = 0;
          i--;
        x++


};