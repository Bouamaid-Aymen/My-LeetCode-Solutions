var reverseWords = function(s) {
 
    let words = s.split(' ');
    

    words = words.filter(word => word.length > 0);
    

    words = words.reverse();
    
    return words.join(' ');
};

// Exemples d'utilisation
console.log(reverseWords("the sky is blue")); 
console.log(reverseWords("  hello world  ")); 
console.log(reverseWords("a good   example"));
