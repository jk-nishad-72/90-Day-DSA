
/*
 *500. Keyboard Row
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

  let s = "qwertyuiop"
  let d = "asdfghjkl"
  let f = "zxcvbnm"
    let res = []
    for(let word of words){
        let lowerWord = word.toLowerCase()
        let row1 = true
        let row2 = true
        let row3 = true
        for(let char of lowerWord){
            if(!s.includes(char)){
                row1 = false
            }
            if(!d.includes(char)){
                row2 = false
            }
            if(!f.includes(char)){
                row3 = false
            }
        }
        if(row1 || row2 || row3){
            res.push(word)
        }
    }
    return res
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));
