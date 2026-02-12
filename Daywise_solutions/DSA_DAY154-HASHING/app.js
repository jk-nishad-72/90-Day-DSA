/*
 *1748. Sum of Unique Elements
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   
    let map = new Map();

    for(let num of nums){
         map.set(num, (map.get(num) || 0) + 1)
    }

     let sum  = 0;
    for(let [key ,value] of map){
             if(value === 1 ) sum += key
         
    }
    
    return sum

};

// console.log(sumOfUnique([1,1,1,1,1]));
console.log(sumOfUnique([1,2,3,4,5]));

// console.log(sumOfUnique([1,2,3,2]));
