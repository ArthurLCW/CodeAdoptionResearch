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
var isValidBST = function (root) {
  console.log(root);
  if (root.val < (root.left.val || root.left.right || root.left.left))
    return false;
  if (root.left < (root.right.val || root.right.right || root.right.left))
    return false;
  return true;
};
