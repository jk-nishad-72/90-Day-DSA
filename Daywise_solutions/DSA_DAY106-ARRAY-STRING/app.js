var removeAnagrams = function(words) {
    let result = [];
    
    for (let word of words) {
        let sorted = word.split('').sort().join('');
        
        if (
            result.length === 0 ||
            sorted !== result[result.length - 1].split('').sort().join('')
        ) {
            result.push(word);
        }
    }
    
    return result;
};


console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]));
