function filterBrackets(s) {
  if (s == "(") {
    return "(";
  } else if (s == ")") {
    return ")";
  } else {
    return "";
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var brackets = s.split("").map(filterBrackets).join("");

  var previousLength = brackets.length;
  var filtered = brackets.replaceAll("()", "");

  while (filtered.length != previousLength) {
    previousLength = filtered.length;
    filtered = brackets.replaceAll("()", "");
  }

  return brackets.length - filtered.length;
};
