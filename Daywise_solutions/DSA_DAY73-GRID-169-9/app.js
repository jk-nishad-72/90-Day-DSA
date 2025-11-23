
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let copy = x
//     let temp = 0;
//     while(x > 0){    
//          let rem = x % 10 ;

//          temp = (temp * 10 )+rem;

//          x = parseInt(x / 10)
//     }
//  if(copy === temp) return true
//  else return false
 
// };

// console.log(isPalindrome(121));

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let clr = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase()

     let i = 0; 
     let j = clr.length-1;

     while(i <= j){

         if(clr.charAt(i) !== clr.charAt(j)){
                  return false
         }else{
             i++
             j--
         }
     }
     return true
 
};

console.log(isPalindrome("race a car"));





