
// Definition for a binary tree node.
 function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
 }

/**
  * @param {TreeNode} root
  * @return {boolean}
*/
var isValidBST = function(root) {
  if(TreeNode.root == null){
    console.log("True");
  }
  if(TreeNode.left < TreeNode.root && TreeNode.right > TreeNode.root){
    console.log("True");
  }

  
};