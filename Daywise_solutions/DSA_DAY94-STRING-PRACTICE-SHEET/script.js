
let prompt = require('prompt-sync')();




var frequencyOfChars = function () {
    let s = prompt('Enter string for Frequency of each Char -> : ');
    let t = prompt('Enter string for Frequency of each Char -> : ');

    let arr = new Array(123).fill(0);
    let arr2 = new Array(123).fill(0);

    for (let i = 0; i < s.length; i++) {

        let ascii = s.charCodeAt(i);
        arr[ascii] += 1;
    }
    
    for (let i = 0; i < t.length; i++) {

        let ascii = t.charCodeAt(i);
        arr2[ascii] += 1;
    }

    for (let i = 0; i < s.length; i++) {

        let ascii = s.charCodeAt(i);

        console.log(`${s[i]} -> ${arr[ascii]}`);


    }

    for (let i = 0; i < t.length; i++) {

        let ascii = t.charCodeAt(i);

        console.log(`${t[i]} -> ${arr2[ascii]}`);


    }

    if (s.length != t.length) { 
        console.log("Strings are not equal in length");
        return
    }else {
        for (let i = 0; i < s.length; i++) {

            let ascii1 = s.charCodeAt(i);
            let ascii2 = t.charCodeAt(i);

            if(arr[ascii1] - arr2[ascii1] > 3 || arr2[ascii2] - arr[ascii2] > 3 ){

                console.log("Strings are not almost equivalent");
                return


        }
    }
    console.log("Strings are almost equivalent");
}

}


console.log(frequencyOfChars());



var anagram = function () {
    let s = prompt('Enter first string for Anagram -> : ');
    let t = prompt('Enter second string for Anagram -> : ');


    let arr = new Array(123).fill(0);


    if (s.length != t.length) {
        console.log(s + " and " + t + ' are not Anagram');
        return
    } else {

        for (let i = 0; i < s.length; i++) {
            let asci = s.charCodeAt(i)
            arr[asci] += 1;
        }
        for (let i = 0; i < t.length; i++) {
            let asci = t.charCodeAt(i)
            arr[asci] -= 1;
        }

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] != 0) {
                console.log("Not Anagram");
                return
            }
        }
    }

    console.log(s + " and " + t + ' are Anagram');
    return

}

// anagram();
