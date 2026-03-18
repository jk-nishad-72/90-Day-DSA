/**409. Longest Palindrome
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let charCount = {};
    let longest = 0;
    let hasOddCount = false;
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char in charCount) {
        if (charCount[char] % 2 === 0) {
            longest += charCount[char];
        } else {
            longest += charCount[char] - 1;
            hasOddCount = true;
        }
    }
    if (hasOddCount) {
        longest += 1;
    }   
    return longest;
    

};

console.log(longestPalindrome(s = "abccccdd"));
