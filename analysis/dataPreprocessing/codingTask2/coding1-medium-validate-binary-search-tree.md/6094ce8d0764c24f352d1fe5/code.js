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
    if (!val) return true;

    if (
      (left !== null && val <= min) ||
      (right !== null && val >= max)
    ) {
      return false;
    }

    return (
      TreeNode(val.left, left, val.right) && TreeNode(val.right, left, right)
    );
  }

  return TreeNode(root, null, null);
};