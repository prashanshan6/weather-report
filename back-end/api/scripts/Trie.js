class Node {
    constructor() {
        this.childCharacters = {};
        this.isWord = false;
        this.coord = null;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }
    addWord(str, coord) {
        let currNode = this.root;
        for (let i = 0; i < str.length; i++) {
            if (!(str[i] in currNode.childCharacters)) {
                currNode.childCharacters[str[i]] = new Node();
            }
            currNode = currNode.childCharacters[str[i]];
        }
        currNode.isWord = true;
        currNode.coord = coord;
    }

    searchWords(prefix, searchLimit) {
        let words = [];

        const dfs = function (node, pre) {
            if (words.length >= searchLimit) return;
            if (!node) return;
            let children = Object.keys(node);
            if (children.length == 0) {
                return;
            }
            for (let i = 0; i < children.length; i++) {
                dfs(node[children[i]].childCharacters, pre + children[i]);
                if (words.length >= searchLimit) return;
                if (node[children[i]].isWord)
                    words.push({
                        city: pre + children[i],
                        coord: node[children[i]].coord,
                    });
            }
        };

        //traverse till the given prefix in the trie
        let currNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!(prefix[i] in currNode.childCharacters)) {
                return words;
            }
            if (i < prefix.length)
                currNode = currNode.childCharacters[prefix[i]];
        }
        if (currNode.isWord) {
            words.push({ city: prefix, coord: currNode.coord });
        }
        // populate words array using dfs function

        dfs(currNode.childCharacters, prefix);
        return words;
    }
}
// trie.addWord("shan", {});
// trie.addWord("sad", {});
// trie.addWord("ameer", {});
// trie.addWord("amazon", {});
// trie.addWord("amaaa", {});
// trie.addWord("ambaa", {});
// trie.addWord("amaze", {});
// trie.addWord("sane", {});

// console.log(trie.searchWords("am"));
// trie.searchWords(root, "sh");

module.exports = Trie;
