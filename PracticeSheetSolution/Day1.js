
//* movieRating 


let prompt = require('prompt-sync')();



function movieRating(){

    let moviename = prompt('Enter a movie Name: ')

let n = parseFloat(prompt('Enter Your Rating Between 0.0 t0 5.0 : '))

    if(n>=0.0 && n <=2.0 ) console.log(moviename + "Is A Flop ")
    else if(n>=2.1 && n <=3.4 ) console.log(moviename + "Is A Semi Hit ")
    else if(n>=3.5 && n <=4.5 ) console.log(moviename + "Is A  Hit ")
    else  console.log(moviename + "Is A Super Hit  ")
}

// movieRating() 



// alphabat is vowel or consonant 

function vowelOrConsonant(){

    let alphabat = prompt('Enter any alphabate : ').toLowerCase();
 
    if(alphabat === 'a') return 'Vowel '
   else if(alphabat === 'i') return 'Vowel '
   else if(alphabat === 'e') return 'Vowel '
   else if(alphabat === 'u') return 'Vowel '
   else if(alphabat === 'o') return 'Vowel '
    else  return 'Consonent '
}

console.log(vowelOrConsonant());



