function removeComments(code) {
  try {
    return (
      code
        // deal with new line
        .replace(/\\n/g, "\n")
        // Remove single-line comments
        .replace(/\/\/.*$/gm, "")
        // Remove multi-line comments
        .replace(/\/\*[\s\S]*?\*\//gm, "")
        // Remove documentation comments
        .replace(/\/\*\*[\s\S]*?\*\//gm, "")
    );
  } catch (error) {
    return null;
  }
}

function storeCodeLines(code) {
  const cleanCodes = removeComments(code);
  if (cleanCodes === null) return null;
  const arr = cleanCodes
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");
  return arr;
}

const aiCode = {
  easy_ransom_notes: `
    var canConstruct = function (ransomNote, magazine) {
      let magazineLetters = {};
    
      for (let letter of magazine) {
        if (magazineLetters[letter] === undefined) {
          magazineLetters[letter] = 1;
        } else {
          magazineLetters[letter]++;
        }
      }
    
      for (let letter of ransomNote) {
        if (!magazineLetters[letter] || magazineLetters[letter] <= 0) {
          return false;
        } else {
          magazineLetters[letter]--;
        }
      }
    
      return true;
    };
    `,
  easy_remove_duplicates: `
    var deleteDuplicates = function (head) {
      if (!head) return head;
      
      let current = head;
    
      while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    
      return head;
    };
    `,
  hard_longest_valid_parenthesis: `
    var longestValidParentheses = function(s) {
      let maxLen = 0;
      let stack = [-1];
    
      for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
          stack.push(i);
        } else {
          stack.pop();
          if (stack.length === 0) {
            stack.push(i);
          } else {
            const currentLen = i - stack[stack.length - 1];
            maxLen = Math.max(maxLen, currentLen);
          }
        }
      }
    
      return maxLen;
    };`,
  medium_find_winner: `
    var findTheWinner = function (n, k) {
      let queue = [];
      for (let i = 1; i <= n; i++) {
        queue.push(i);
      }
    
      while (queue.length > 1) {
        for (let count = 1; count < k; count++) {
          queue.push(queue.shift());
        }
        queue.shift();
      }
    
      return queue[0];
    };`,
  medium_validate_BST: `
    var isValidBST = function (root) {
      function validate(node, min, max) {
        if (!node) return true;
    
        if (
          (min !== null && node.val <= min) ||
          (max !== null && node.val >= max)
        ) {
          return false;
        }
    
        return (
          validate(node.left, min, node.val) && validate(node.right, node.val, max)
        );
      }
    
      return validate(root, null, null);
    };`,
};

function bruteForceSimilarity(participantCode, questionSet) {
  const AICodeArr = storeCodeLines(aiCode[questionSet]);
  const participantCodeArr = storeCodeLines(participantCode);
  if (AICodeArr === null || participantCodeArr === null)
    return {
      BF_P_Similarity: "error",
      BF_AI_Similarity: "error",
    };

  const AICodeLen = AICodeArr.length;
  const participantCodeLen = participantCodeArr.length;

  // calculate similarity -> participantCode as denominator
  let participantMatchedLines = 0;
  const bitmapAI = new Array(AICodeLen).fill(false); // if used for matching, true
  participantCodeArr.forEach((participantLine) => {
    for (let i = 0; i < AICodeLen; i++) {
      if (!bitmapAI[i] && AICodeArr[i] === participantLine) {
        participantMatchedLines++;
        bitmapAI[i] = true;
        break;
      }
    }
  });

  // calculate similarity -> AICode as denominator
  let AIMatchedLines = 0;
  const bitmapParticipant = new Array(participantCodeLen).fill(false); // if used for matching, true
  AICodeArr.forEach((AILine) => {
    for (let i = 0; i < participantCodeLen; i++) {
      if (!bitmapParticipant[i] && participantCodeArr[i] === AILine) {
        AIMatchedLines++;
        bitmapParticipant[i] = true;
        find = true;
        break;
      }
    }
  });

  return {
    BF_P_Similarity: participantMatchedLines / participantCodeLen,
    BF_AI_Similarity: AIMatchedLines / AICodeLen,
  };
}

module.exports = bruteForceSimilarity;
