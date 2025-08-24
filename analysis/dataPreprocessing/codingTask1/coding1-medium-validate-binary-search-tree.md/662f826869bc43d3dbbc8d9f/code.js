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

class TreeNote {
  constructor(val, left=None, right=None){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var isValidBST = function(root) {
  function inorderTraversal(node, prev) {
    if(!node) return true;
    if(!inorderTraversal(node.left, prev)) return false;
    if(node.val <= prev[0]) return false;
    prev[0] = node.val;
    return inorderTraversal(node.right, prev);
  }
  const prev = [-Infinity];
  return inorderTraversal(root, prev);
};

