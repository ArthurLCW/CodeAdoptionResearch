/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*   this.val = (val===undefined ? 0 : val)
*   this.left = (left===undefined ? null : left)
*   this.right = (right===undefined ? null : right)
* }
*/

var isValidBST = function(root) {
    let prev = null;
    const inorderTraversal = function(node) {
        if (!node) return true;
        if (!inorderTraversal(node.left)) return false;
        if (prev !== null && node.val <= prev.val) return false;
        prev = node; 
        return inorderTraversal(node.right);
    };
    return inorderTraversal(root);
};
