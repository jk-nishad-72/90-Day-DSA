
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

console.log(ToggleEachChar());


/**
 * — Q 59. Take an array of strings words and a String Prefix. Print the number of strings
in words that contain pref as a prefix.
Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
 */


