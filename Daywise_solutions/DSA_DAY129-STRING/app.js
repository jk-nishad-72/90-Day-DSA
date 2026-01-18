/**58. Length of Last Word
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    

     let Words = s.trim().split(" ");
     return Words[Words.length -1].length;
 
  

   


};

console.log(lengthOfLastWord("Hello World"));
