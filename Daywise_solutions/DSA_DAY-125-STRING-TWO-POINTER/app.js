/**151. Reverse Words in a String
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {


    //  let words = s.split(" ");
    //  console.log(words);

    //  let ans = ''
    //  for(let i = words.length-1;i>=0;i--){
    //         if(words[i] !== ''){
    //             ans += words[i] + ' ';
    //         }
         
    //  }
    //     ans = ans.trim();
    // return ans;

    let words = s.trim().split(/\s+/);
    console.log(words);
    return words.reverse().join(' ');

};
console.log(reverseWords("a good   example"));
