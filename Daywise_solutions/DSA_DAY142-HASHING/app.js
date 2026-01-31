/*
 *1002. Find Common Characters
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    const charCount = Array(26).fill(Infinity);

    for (const word of words) {
        const currentCount = Array(26).fill(0);
        for (const char of word) {
            currentCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            charCount[i] = Math.min(charCount[i], currentCount[i]);
        }
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        while (charCount[i] > 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
            charCount[i]--;
        }
    }
    return result;
};

// Example usage:
console.log(commonChars(["bella","label","roller"])); // Output: ["e","l","l"]
console.log(commonChars(["cool","lock","cook"]));    // Output: ["c","o"]