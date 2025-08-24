/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
      const charCount = new Map();
    
    // Update character frequencies from the magazine
    for (const char of magazine) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Check if ransomNote can be constructed
    for (const char of ransomNote) {
        if (!charCount.has(char) || charCount.get(char) === 0) {
            return false;
        }
        charCount.set(char, charCount.get(char) - 1);
    }
    
    return true;
};


