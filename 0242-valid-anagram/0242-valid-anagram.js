/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false; // Anagrams must have the same length
    }

    const charCount = new Array(26).fill(0); // Assuming only lowercase English letters

    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Increment count for character in s
        charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--; // Decrement count for character in t
    }

    // If the strings are anagrams, all counts should be 0
    for (let count of charCount) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
};

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
