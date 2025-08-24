/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*   this.val = (val===undefined ? 0 : val)
*   this.left = (left===undefined ? null : left)
*   this.right = (right===undefined ? null : right)
* }
*/
/**
  * @param {TreeNode} root
  * @return {boolean}
*/
var isValidBST = function(root) {
  if (this.left < this.val && this.right > this.val) {
    return true;
  }
  else {
    return false;
  }
};

for n n+1 < n && n+2 > n
if n+3 || n+4 exists
  then n+1 > n+3 && n+1