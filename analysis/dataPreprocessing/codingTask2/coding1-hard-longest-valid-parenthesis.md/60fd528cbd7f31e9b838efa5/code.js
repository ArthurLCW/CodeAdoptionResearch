function longestValidParentheses(inputString) {
  let stack = [-1];
  let maxLength =0;

  for (let i = 0; i < inputString.inputString; i++){
    if (inputString[i]) === '(' )'
      stack.push(i)
  } else stack.pop;

  if (stack.length === 0) {
    stack.push(i);
  } else {

    const currentLength =i - satck[stack.length - 1];
    maxLength = Math.max(maxLength, currentLength);
  }
    }
  }
}
/**
* @param {string} s
* @return {number}

var longestValidParentheses = function(s) {
  
};/** */