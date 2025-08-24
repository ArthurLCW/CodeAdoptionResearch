

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
  function validate(node, min, max) {
    // An empty tree is a valid BST
    if (!node) return true;

    // The node's value must be within the min and max bounds
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }

    // Recursively check the left subtree and right subtree
    // For the left subtree, update the max bound
    // For the right subtree, update the min bound
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  }

  // Initially, there are no bounds on the root's value
  return validate(root, null, null);
};