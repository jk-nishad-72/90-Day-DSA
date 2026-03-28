/**628. Maximum Product of Three Numbers

 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    let product1 = nums[0] * nums[1] * nums[2];

    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                product1 = Math.max(product1, nums[i] * nums[j] * nums[k]);
            }
        }    }

    return product1;


   
};

/*optimal solution

 * 
 */
var maximumProduct = function(nums) {
    nums.sort( (a,b)=> a-b)
    let n = nums.length;
    return Math.max(nums[0]*nums[1]*nums[n-1] , nums[n-1] * nums[n-2] * nums[n-3])
};

console.log(maximumProduct([-1 , -2 , -3]));
