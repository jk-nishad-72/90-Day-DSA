

let prompt = require('prompt-sync')()



/**
 * Q 61.- Accept a string and print the frequency of each character
present in the string
 */

function characterFrequency(str) {
    let freqArr = new Array(123).fill(0)
    for(let i=0;i<str.length;i++){
        let asci = str.charCodeAt(i)
        freqArr[asci] = freqArr[asci]+1;
    }
    for(let j =0;j<freqArr.length;j++){
        if(freqArr[j]!=0 && j>=97 && j<=122){
            console.log(String.fromCharCode(j)+": " +freqArr[j])
        }
    }
}


/**
 * 
 * — Q 62. Check Two Strings are Anagram or Not
Anagrams words have the same word length & same character count
Examples of anagram words are arc and car, state and taste,
night and thing etc.
 */

function isAnagram(s1, s2) {
    let arr = new Array(123).fill(0);
    if(s1.length!=s2.length) {
       return false;
    }
    else{
    for(let i =0;i<s1.length;i++){
        
        let asci = s1.charCodeAt(i);
        
        arr[asci] = arr[asci]+1;
    }
    for(let i =0;i<s2.length;i++){
        let asci = s2.charCodeAt(i);
        arr[asci] = arr[asci]-1;
    }
    for(let i =0;i<arr.length;i++){
        if(arr[i]!=0 && i>=97&&i<=122){
            return false;
        }}
    return true
  }  
}



/**
 * 
 *## —Set

—Mastering Basics of   SET 

— Q 63. Check if the pangram or not

 */
var checkIfPangram = function(sentence) {


    let set = new Set(sentence)

    return set.size===26

    
};

