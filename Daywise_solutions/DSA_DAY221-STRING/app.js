/**709. To Lower Case
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    
     
    // return s.toLowerCase();
    
    let result = '';
    for(let i = 0; i < s.length; i++){
        let charCode = s.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
            result += String.fromCharCode(charCode + 32);
        } else {
            result += s[i];
        }
    }
    return result;

};

console.log(toLowerCase('Hello')); // Output: 'hello'
console.log(toLowerCase('here'));
