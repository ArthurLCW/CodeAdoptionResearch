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
   let result = [];
    
    
    function inorderTraversal(node) {
        if (node) {
            inorderTraversal(node.left);
            result.push(node.val);
            inorderTraversal(node.right);
        }
    }
    
    
    inorderTraversal(root);
    
    
    for (let i = 1; i < result.length; i++) {
        if (result[i] <= result[i - 1]) {
            return false;
        }
    }
    
    return true;
};
