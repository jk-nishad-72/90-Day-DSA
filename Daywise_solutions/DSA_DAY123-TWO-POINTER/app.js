
/**680. Valid Palindrome II
 * @param {string} s
 * @return {boolean}
 */

// Approach: Two Pointer but not optimal]

// var validPalindrome = function(s) {
//      let i = 0;
//      let j = s.length-1;
//      let count = 0;
//      while(i <= j){     

//            if(s[i] == s[j]) {
//               i++
//               j--
//            }
//               else {    
//                     let str1 = s.slice(0,i) + s.slice(i+1)
//                     let str2 = s.slice(0,j) + s.slice(j+1)
//                     let rev1 = str1.split('').reverse().join('')
//                     let rev2 = str2.split('').reverse().join('')
//                     if(str1 == rev1 || str2 == rev2) {
//                         return true
//                     }
          
//                 }
//      }

//   return true
// };


// Optimal Approach: Two Pointer 
var validPalindrome = function(s) {
     let i = 0;
     let j = s.length-1;
   
     while(i <= j){     

           if(s[i] == s[j]) {
              i++
              j--
           }
                else {  
                        return isPalindrome(s, i+1, j) || isPalindrome(s, i, j-1)
          
                }
     }

  return true
};


var isPalindrome = function(s, left, right) {

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

    
}
console.log(validPalindrome("abca"));