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
  let i = 0
  let currentNode = root
  let traverseLeftSide = true
  while (true) {
    if (traverseLeftSide) {
    if (currentNode.left == null && currentNode.right == null) {
      break
    }
    if (currentNode.left > currentNode) {
      return false
    }
    else if (currentNode.left != null){
      currentNode = currentNode.left
    }
    else {
      traverseLeftSide = false
    }
    }
    if (traverseLeftSide == false) {
    if (currentNode.right < currentNode) {
      return false
    }
    else if (currentNode.right != null){
      currentNode = currentNode.right
    }
  }}
  if (currentNode.left == null && currentNode.right == null) {
    return false
  }
  return true
};