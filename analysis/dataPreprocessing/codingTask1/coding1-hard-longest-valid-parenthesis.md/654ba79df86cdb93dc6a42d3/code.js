/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
    const endpost = -1;

    const startpos = s.indexOf('(');
    const endpos = s.lastIndexOf(')');

    for 

    if (startpos == -1 || endpos == -1)
      return 0;
    else
      return endpos - startpos;
};