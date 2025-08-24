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
  let myNewNode = new Node(root);
  return myNewNode;
  
};
let root = isValidBST(4);
root.left = isValidBST(2);
root.right = isValidBST(5);