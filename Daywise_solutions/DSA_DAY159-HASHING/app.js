/*
*167. Two Sum II - Input Array Is Sorted
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let map = new Map();
    let ans = [-1,-1]; 

    for(let i = 0; i < numbers.length ;i++){
            if(map.has(target - numbers[i])) {
                ans[0] = (  map.get(target - numbers[i]) + 1) ;
                ans[1] = i + 1;
                return ans
            }else{
                map.set(numbers[i],i)
            }
    }
};

console.log(twoSum([2,7,11,15], 9));