var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    
    const phoneMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    const result = [];
    
    const generateCombinations = (currentCombination, nextDigits) => {
        if (nextDigits.length === 0) {
            result.push(currentCombination);
            return;
        }
        
        const currentDigit = nextDigits[0];
        const letters = phoneMap[currentDigit];
        
        for (const letter of letters) {
            generateCombinations(currentCombination + letter, nextDigits.slice(1));
        }
    };
    
    generateCombinations('', digits);
    
    return result;
};
