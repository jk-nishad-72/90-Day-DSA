
/*
 *557. Reverse Words in a String III
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    

    let word =  s.split(" ");
     let result = [];
       
    for(let i = 0; i < word.length;i++){

        let reversedWord = reverseWord(word[i].split(''));
        result.push(reversedWord.join(''));
          
    }
    return result.join(' ');
};

var reverseWord = function(s) {
      
     let i = 0;
     let j = s.length - 1;

     while(i < j){
         let temp = s[i];
         s[i] = s[j];
         s[j] = temp;
         i++;
         j--;
     }
        return s;

}

console.log(reverseWords("Mr Ding"));
