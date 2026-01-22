
console.log('DSA_DAY_132 ARRAY LINEAR SEARCH➡️ 21/01/2026'); 

var addStrings = function(num1, num2) {
    

    let carry = 0;
    let result = [];
    let i = num1.length - 1;
    let j = num2.length - 1;    
    while(i >= 0 || j >= 0 || carry) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    return result.reverse().join('');
};

console.log(addStrings(num1 = "11", num2 = "123"));

