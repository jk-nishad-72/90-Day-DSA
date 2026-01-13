/*
*28. Find the Index of the First Occurrence in a String
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(haystack.includes(needle)){
        return haystack.indexOf(needle);
    }
    return -1;
}

console.log(strStr( "leetcode", needle = "leeto"));

