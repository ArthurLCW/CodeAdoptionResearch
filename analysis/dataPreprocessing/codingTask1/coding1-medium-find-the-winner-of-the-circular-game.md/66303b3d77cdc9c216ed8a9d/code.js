/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  var arr = [];
  var last = 1;
  for(var i = 1; i <= n; i++)
  {
    arr.push(i);
  }

  for(var i = 0; i < arr.length; i++)
  {
    for(var j = last; j <= k; j++)
    {
      arr.splice(j,1);
      last = j+1;
    }
  }

  return arr[0];
};