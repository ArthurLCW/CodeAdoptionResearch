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
class TreeNode{
  constructor(val,left=null, right=null){
    this.val=val;
    this.left=left;
    this.right=right;
  }
}
var isValidBST = function(root) {
  function validate(node,min,max){
    if(node===null)return true;
    if (
      node.val<=min || node.val >=max
    ) return false;
    return validate(node.left, min, node.val) && validate(node.right,node.val,max);
  
}
return validate(root, -Infinity, infinity);
}
