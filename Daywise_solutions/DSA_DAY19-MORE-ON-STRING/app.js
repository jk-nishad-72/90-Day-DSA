
let prompt = require('prompt-sync')()


/**
 * 
  **— Q 58. Toggle each alphabet of String
  **In - AcgDfD Output - aCGdFd

 */

function ToggleEachChar(){
    
let s = prompt('Enter String : ')

 let output = ''

for(let i = 0;i<s.length;i++){
 
     let asci = s.charCodeAt(i)

     if(asci>=65&&asci<=90){
         
        output += String.fromCharCode(asci+32)

     }else if(asci>=97&&asci<=122){

        output += String.fromCharCode(asci-32)

     }
}

return output

}

// console.log(ToggleEachChar());


/**
 * — Q 59. Take an array of strings words and a String Prefix. Print the number of strings
in words that contain pref as a prefix.
Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
 */

function countChar(){
    
let Ssize = prompt('Enter String Array size ')
let words = new Array(Ssize)

for(let i = 0;i<Ssize;i++){
    words[i] = prompt('Enter String : ')
}

let pref = prompt('Enter a Prefix : ')

 console.log(CountNumberOfPrefix(words,pref));

function CountNumberOfPrefix(words , pref){
     let count = 0
for(let  i =0;i<words.length;i++){

     let word = words[i]

     if(word.startsWith(pref)) count++

}

 return (count);
}

}

// countChar()

/**
 * -- Q 60. Capitalize first & last character of each word
in the sentence and print the new sentence
Ex - 	Hello bhai Kaise ho a
HellO BhaI KaisE HO A
 */


function firstAndLastUpperCase(){
    
let st = prompt('Enter Strings : ')

let words = st.split(' ')

let ans = ' '

for(let i =0;i<words.length;i++){

     let word = words[i]

     if(word.length<=2) ans += word.toUpperCase()+ ' '

    else {
        ans += word[0].toUpperCase()+
               word.substring(1,word.length-1)+
               word[word.length-1].toUpperCase()+' '
    }
     
}

return (ans)


}

console.log(firstAndLastUpperCase());













