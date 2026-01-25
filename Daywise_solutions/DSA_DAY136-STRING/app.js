

/*
 *2810. Faulty Keyboard
 * @param {string} s
 * @return {string}
 */

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }   
    return s
}

var finalString = function(s) {
    
    let result = [];
    for (let char of s) {
        if (char === "i") {
            result = reverseString(result);
        } else {
            result.push(char);
        }   
    }
    return result.join(''); 
      
};


console.log(finalString("string"));
