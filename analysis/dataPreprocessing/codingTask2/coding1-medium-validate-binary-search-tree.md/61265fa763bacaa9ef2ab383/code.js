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
  if (root.left){
    isValidBST(root.left);
    if (root.val <= root.left.val){
      return false
    }
  }
  

  if (root.right){
    isValidBST(root.right);
    if (root.val >= root.right.val){
      return false
    }
  }
  

  return true

};