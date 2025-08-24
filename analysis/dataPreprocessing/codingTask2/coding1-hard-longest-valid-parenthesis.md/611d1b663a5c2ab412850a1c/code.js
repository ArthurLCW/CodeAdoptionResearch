/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
  var maxLen = 0;
  var lastInvalid = -1
  var stack = [];
  for (var i = 0; i < s.length;i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        lastInvalid = i;
      } else {
        stack.pop();
        if (stack.length === 0)
        {
          maxLen =
          Math.max(maxLen, i -
          lastInvalid);
        } else {
          maxLen =
          Math.max(maxLen, i -
          stack[stack.length - 1])
        }
        }
      }
      }
    }
    }
  }
};