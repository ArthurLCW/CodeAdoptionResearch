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
  const isValidHelper = (arr) => {
    if (arr.length <= 1) return true;
    const rootValue = arr[0];
    let rightIndex = 1;
    while (rightIndex < arr.length && arr[rightIndex] < rootVal) {rightIndex++;}
    for (let i=rightIndex; i < arr.length; i++) {
      if (arr[i] < rootVal) return false;
    }
    return isValidHelper(arr.slice(1, rightIndex)) && isValidHelper(arr.slice(rightIndex));
  }
  return isValidHelper(root)
};