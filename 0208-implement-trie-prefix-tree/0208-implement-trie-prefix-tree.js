
var Trie = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var TrieNode = function() {
    this.children = {};
    this.isEndOfWord = false;
};

var Trie = function() {
    this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.isEndOfWord = true;
};

Trie.prototype.search = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return node.isEndOfWord;
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let char of prefix) {
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return true;
};

// Test cases
var obj = new Trie();
obj.insert("apple");
console.log(obj.search("apple"));   // Output: true
console.log(obj.search("app"));     // Output: false
console.log(obj.startsWith("app")); // Output: true
obj.insert("app");
console.log(obj.search("app"));     // Output: true
