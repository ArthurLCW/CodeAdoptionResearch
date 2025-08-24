/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  var best = 0;
  for (var j = 0; j < s.length; j++) {
    best = Math.max(best, helper(s.substring(j, s.length)));
  }
  return best;
};

var helper = function(s) {
  var counter = 0;
  var length = 0;
  for (var i = 0; i < s.length; i++) {
    var currentChar = s.charAt(i);
    if (currentChar == "(") {
      counter += 1;
      length += 1;
    } else if (currentChar == ")") {
      if (counter == 0) {
        return length;
      } else {
        counter -= 1;
        length += 1;
      }
    } else {
      return 0;
    }
  }
  return (length - counter);
};