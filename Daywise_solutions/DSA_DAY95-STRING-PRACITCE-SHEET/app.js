
var reversePrefix = function(word, ch) {

    if(word.includes(ch)){

        let idx = word.indexOf(ch);
        let firstPart = word.slice(0, idx+1).split('').reverse().join('');
        let secondPart = word.slice(idx+1 , word.length+1);
        return firstPart + secondPart;
    }
    else{
        return word;
    }
};

console.log(reversePrefix('abcdefd' ,'d'));


var areNumbersAscending = function(s) {
let res = s.split(' ')
let ans = []
 for(let i = 0; i < res.length; i++){
     let ch = Number(res[i]);
     if(!isNaN(ch)){ 
     ans.push( ch )
     }
 }
 for(let i = 0; i < ans.length; i++){   
        if(ans[i] >= ans[i+1] ){
            return false
        }       
 }
return true
};


