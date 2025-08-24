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

  // Assume no root means an invalid BST
  if (!root)
  {
    return false
  }

  // Check the left child value must be smaller than the root value
  if (root.left && root.left.val > root.val)
  {
    return false
  }

  // CHeck the right child value must be greater than the root value
  if (root.right && root.right.val < root.val)
  {
    return false
  }

  // Recurse into the left child, asserting that it is a valid BST
  if (root.left && !isValidBST(root.left))
  {
    return false
  }

  // Recurse into the right child, asserting that it is a valid BST
  if (root.right && !isValidBST(root.right))
  {
    return false
  }

  return true
};