 /**Definition for a binary tree node. 
function TreeNode(val, left, right) {
this.val = (val===undefined ? 0 : val)
this.left = (left===undefined ? null : left)
this.right = (right===undefined ? null : right)

 @param {TreeNode} root
 /**@return {boolean}/** */
 var isValidBST = function(root) {
  function isValid(node,minVal,maxVal) 
    if (!node) return true;
    if node.val <= minVal || node.val >= maxVal) return false;
    return isValid(node.left,minVal,node.val) &&
    isValid(node.left,minVal,node.val)
 }
 return isValid(root,-Infinity,Infinity);
  
};
