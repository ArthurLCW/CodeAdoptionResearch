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
var isValidBST = function(root: TreeNode | null) boolean {
  function valid(node: TreeNode | null, left: number, right: number); boolean{
    if (node === null) {
        return true;
        }

     if (node.val >= right || node.val >= upper) return false; //check val in range

     
  }
  return helper(root, -Infinity, Infinity);
};