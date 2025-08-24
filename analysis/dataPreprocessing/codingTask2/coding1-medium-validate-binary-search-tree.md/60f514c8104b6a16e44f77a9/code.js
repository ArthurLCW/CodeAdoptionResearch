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
  function inorderTr(node, lower =  -Infinity, upper = Infinity){
    if (!node) {
      return true;
    }
    if (node.val <= lower || node.val >= upper){
      return false;
    }

    return (
      inorderTr(node.left, lower, node.val) && inorderTr(node.right, node.val, upper)
      );
  }
  return inorderTr(root);
};