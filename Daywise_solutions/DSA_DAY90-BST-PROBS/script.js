

let prompt = require('prompt-sync')();



var isPalindrome = function() {

let s  = prompt('Enter a String (to Check Palindrome): ');

s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

for (let i = 0; i < s.length; i++){

    console.log(s.charCodeAt(i));
}
  
  

  let first = 0;
  let last = s.length - 1;

  while(first <= last){

       if(s[first]  !== s[last]) return `The String "${s}" is Not a Palindrome`;
        first++
        last--
  }
   return `The String "${s}" is  a Palindrome`;
}

// console.log(isPalindrome());

var toggleEachAlphabat =  function(){
     let s   = prompt('Enter a String (to Toggle Each Alphabat): ');

        let toggledString = '';

        for(let i = 0;i<s.length;i++){

             let asci = s.charCodeAt(i);
                if(asci >= 65 && asci <= 90){
                    toggledString += String.fromCharCode(asci + 32);
                }
                else if(asci >= 97 && asci <= 122){
                    toggledString += String.fromCharCode(asci - 32);
                }
        }

        return toggledString;
        

}

// console.log(toggleEachAlphabat());

var countPrefixes = function(){
    let words = ["pay","attention","practice","attend"];
    let s = 'at'

    let count = 0;

    for(let i = 0;i<words.length;i++){
        if(words[i].startsWith(s)){
            count++;
        }
    }
    return count;
}

console.log(countPrefixes()); 





