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
    if (!node) return true;

    if ((minValue !== null && node.val <= minValue) || (maxValue !== null && node.val >= maxValue))
      return false;
    
    return myValidation(node.left, minValue, node.val) && myValidation(node.right, node.val, maxValue);
  }  
  return myValidation(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};