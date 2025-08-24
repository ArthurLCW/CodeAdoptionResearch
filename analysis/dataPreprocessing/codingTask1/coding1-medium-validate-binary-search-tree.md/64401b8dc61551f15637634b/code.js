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
  var leftValid = true
  var rightValid = true
  if (root.left) {
     leftValid = isValidBST(root.left) && root.left.val < root.val
  }
  if (root.right) {
    rightValid = isValidBST(root.right) && root.right.val > root.val
  }
  return leftValid && rightValid
};