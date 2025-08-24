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
  if (root.val === null) return true;
  if (root.val < root.left) return false;
  if (root.val < root.right) return false;
  return isValidBST(root.left.val) && isValidBST(root.right.val);
};