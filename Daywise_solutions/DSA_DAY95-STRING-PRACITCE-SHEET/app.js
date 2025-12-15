
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
