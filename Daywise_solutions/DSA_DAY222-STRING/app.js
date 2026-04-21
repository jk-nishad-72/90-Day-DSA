/**1684. Count the Number of Consistent Strings
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    let count = 0;
    for(let i = 0;i<words.length;i++){
        for(let j = 0;j<words[i].length;j++){
            // process.stdout.write(words[i][j] + "");
          if(!allowed.includes(words[i][j])){
              break;
          }
            if(j === words[i].length - 1){
                // console.log("consistent string: " + words[i]);
                count++;
            }
        }
    }
    return count;
};

console.log(countConsistentStrings(allowed = "ab", words = ["ad","bd","aaab","baa","badab"])); //2
