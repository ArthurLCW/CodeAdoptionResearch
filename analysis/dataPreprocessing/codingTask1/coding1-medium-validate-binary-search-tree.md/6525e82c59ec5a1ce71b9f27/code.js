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
  function myValidation(node, minValue, maxValue){
    if ((node.val <= minValue) || (node.val >= maxValue))
      return false;
    
    return myValidation(node.left, minValue, node.val) && validate(node.right, node.val, maxValue);
  }  
  return myValidation(root, null, null);
};