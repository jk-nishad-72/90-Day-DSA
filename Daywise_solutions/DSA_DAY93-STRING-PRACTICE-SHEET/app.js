

let prompt = require('prompt-sync')();

var makeFrequency = function () {

    let arr = '1210'

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {

        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (!map.has(`${i}`)) {
            map.set(`${i}`, 0)
        }
    }
    console.log(map);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] != map.get(`${i}`)) {
            console.log("false");
            return;
        }

    }



    console.log(map);
    console.log("true");

}

// makeFrequency();


var greatestEnglishLetter = function () {
  let letters = 'Z Y X W V U T S R Q P O N M L K J I H G F E D C B A'
  let s  = prompt("Enter the string : ");

  for (let i = 0; i < letters.length; i++) {
     let ch = letters[i];
        if (s.includes(ch) && s.includes(ch.toLowerCase())) {  
            console.log(ch);
            return;
         }
    }
  
//   console.log(s);
    console.log("");
  
}

greatestEnglishLetter();