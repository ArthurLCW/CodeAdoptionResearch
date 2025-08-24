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

  if (!root)
  {
    return false
  }

  if (root.left && root.left.val > root.val)
  {
    return false
  }

  if (root.right && root.right.val < root.val)
  {
    return false
  }

  if (root.left && !isValidBST(root.left))
  {
    return false
  }

  if (root.right && !isValidBST(root.right))
  {
    return false
  }

  return true
};