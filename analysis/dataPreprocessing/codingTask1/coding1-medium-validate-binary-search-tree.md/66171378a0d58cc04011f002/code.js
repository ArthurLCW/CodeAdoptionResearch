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

var getMinMax = function(root) {
  var leftResult = null;
  var rightResult = null;
  var min = root.val;
  var max = root.val;
  if (root.left) {
    leftResult = getMinMax(root.left);
    if (leftResult.min < min) {
      min = leftResult.min;
    }
    if (leftResult.max > max) {
      max = leftResult.max;
    }
  }
  if (root.right) {
    rightResult = getMinMax(root.right);
    if (rightResult.min < min) {
      min = rightResult.min;
    }
    if (rightResult.max > max) {
      max = rightResult.max;
    }
  }
  return { min: min, max: max, val: root.val };
};

var isValidBST = function(root) {
  if (root.left) {
    leftResult = getMinMax(root.left);
    if (leftResult.max >= root.val) {
      return false;
    }
  }
  if (root.right) {
    rightResult = getMinMax(root.right);
    if (rightResult.min <= root.val) {
      return false;
    }
  }
  return true;
};