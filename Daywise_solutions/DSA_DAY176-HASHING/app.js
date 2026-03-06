/**890. Find and Replace Pattern
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    
    let result = [];
    let patternMap = new Map();
    let patternSet = new Set();
    for(let i = 0; i < pattern.length; i++){
        if(!patternMap.has(pattern[i])){
            patternMap.set(pattern[i], i);
            patternSet.add(pattern[i]);
        }
    }
    
    for(let word of words){
        let wordMap = new Map();
        let wordSet = new Set();    
        let isMatch = true; 
        for(let i = 0; i < word.length; i++){
            if(!wordMap.has(word[i])){  
                wordMap.set(word[i], i);
                wordSet.add(word[i]);
            }   
            if(patternMap.get(pattern[i]) !== wordMap.get(word[i])){
                isMatch = false;
                break;
            }   
        }        if(isMatch && patternSet.size === wordSet.size){
            result.push(word);
        }   
    }
    return result;
    
};

console.log(findAndReplacePattern( words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"));
