function longestValidParentheses(s) {
    let stack = [-1]; // Initialize stack with -1 to handle edge case where first character is ')'
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // Push index of '(' to stack
        } else {
            stack.pop(); // Pop the topmost element (index of '(') from stack
            if (stack.length === 0) {
                stack.push(i); // If stack becomes empty, push current index to mark a new starting point
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]); // Calculate length of valid parentheses substring
            }
        }
    }

    return maxLength;
}

// Test cases
console.log(longestValidParentheses("(()")); // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
console.log(longestValidParentheses("")); // Output: 0
