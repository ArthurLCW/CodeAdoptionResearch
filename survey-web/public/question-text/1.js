/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValidNode(root, -Infinity, Infinity);
};

function isValidNode(node, min, max) {
  if (node === null) return true;

  const curValidate = node.val > min && node.val < max;

  // recursively check left subtree
  const leftValidate = isValidNode(node.left, min, node.val);

  // recursively check right subtree
  const rightValidate = isValidNode(node.right, node.val, max);

  return curValidate && leftValidate && rightValidate;
}
