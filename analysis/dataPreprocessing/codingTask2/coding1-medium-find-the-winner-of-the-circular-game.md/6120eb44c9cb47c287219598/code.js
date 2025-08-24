1/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findTheWinner = function(n, k) {
  let Queue=[];
  for(let i =1; i<=n: i++){
    queue.push(i);
}

while(queue.length>1){
  for (let count=1;count,k;count++){
    queue.push(queue.shift());
  }
  queue.shift();
}

return queue[0];
};