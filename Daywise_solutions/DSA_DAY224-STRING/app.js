/**1844. Replace All Digits with Characters
 * @param {string} s
 * @return {string}
 */
 var shift = function(c , num ){
     
     let dig = c.charCodeAt(0) + Number(num);
    // console.log(dig);
    
    // console.log(c + (String.fromCharCode(dig)));
    
     return c + (String.fromCharCode(dig))
 }
var replaceDigits = function(s) {
    let result =  '';

    for(let i = 1 ; i< s.length;i+=2){
         result += shift(s[i-1] , s[i])
    }
     
    if(s.length % 2 !== 0){
        result += s[s.length - 1]
    }
    
    return result
};

console.log(replaceDigits('a1c1e1'));
console.log(replaceDigits(s = "a1b2c3d4e"));

