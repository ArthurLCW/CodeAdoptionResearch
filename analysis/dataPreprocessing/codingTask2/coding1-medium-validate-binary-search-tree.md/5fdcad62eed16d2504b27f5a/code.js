/**
* Definition for a binary tree node.
A BST is a specific type of binary tree that has a special ordering property.
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
  function validate(node, lowerLimit, upperLimit) {
    //An empty tree is a valid BST
    if (!node) return true;

    //nod's value must be within the Lowerlimit and upperLimit bounds
    if (
      (lowerLimit !== null && node.val <= lowerLimit)
      (upperLimit !== null && node.val >= upperLimit)
    ) {
      return false;
    }

    //Recursive check the left and right subtree and right subtree
    //For the left subtree, update the upperLimit bound
    //For the right subtree, update the lowerLimit bound
    return (
      validate(node.left, lowerLimit, node.val) && validate(node.right, node.val, upperLimit)
    );
  }

  //Initially, there are no bounds on the root's value
  return validate(root, null, null);
};