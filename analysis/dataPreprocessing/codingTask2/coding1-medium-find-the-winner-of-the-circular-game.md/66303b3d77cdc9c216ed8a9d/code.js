/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  var arr = [];

  for(var i = 1; i <= n; i++)
  {
    arr.push(i);
  }

  while(arr.length > 1)
  {
    for(var j = 1; j < k; j++)
    {
      arr.push(arr.shift());
    }
    arr.shift();
  }

  return arr[0];
};