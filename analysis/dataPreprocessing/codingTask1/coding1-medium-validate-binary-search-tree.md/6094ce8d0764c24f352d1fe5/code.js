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
  function TreeNode(val, left, right) {
    if(val=== null) return true;
    if((left !== null && val.val <= left)) return false;
    return TreeNode(val.left, left, val.val) && TreeNode(val.right, val,val,left)
  }
  r
};