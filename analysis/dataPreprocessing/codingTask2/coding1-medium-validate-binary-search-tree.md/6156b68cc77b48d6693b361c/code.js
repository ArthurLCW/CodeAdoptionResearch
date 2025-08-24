// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
  * @param {TreeNode} root
  * @return {boolean}
*/

// Check if the tree is a BST
var isValidBST = function(root) {
  const checkValid = (node, min, max) => {
    if(!node) {
      return true
    }

    if(node.val <= min || node.val >= max) {
      return false
    }

    return checkValid(node.left, min, node.val) && checkValid(node.right, node.val, max)
  }

  return checkValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}


isValidBST(TreeNode(2, 1, 3))