
let prompt = require('prompt-sync')()
var togglefirstLastchar = function(){

    let words = prompt('Enter words : ').split(' ')

   let ans = ''
   for(let i = 0 ; i< words.length ; i++){ 

     if(words[i].length <=  2){
        ans = ans+ words[i].toUpperCase() + ' '

   }
  else{ans  = ans + words[i].charAt(0).toUpperCase() +
            words[i].substring(1, words[i].length - 1) +
            words[i].charAt(words[i].length - 1).toUpperCase() + ' '
  }
} 

console.log(ans);

}

togglefirstLastchar()