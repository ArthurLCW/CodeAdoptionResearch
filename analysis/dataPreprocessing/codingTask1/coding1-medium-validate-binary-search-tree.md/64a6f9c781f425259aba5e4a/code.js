// This was the given function i just de commented it 
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var isValidBST = function(troot) {
  const x = (node, min, max) => {
    if (!node) return true;
    
    // Simple range check
    if (node.val <= min || node.val >= max) return false;
    
    // checking sub trees using values you gave me
    return x(node.left, min, node.val) && x(node.right, node.val, max);
  };
  
  // Call the fn named x to ensure boundaries specified below
  return x(troot, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
