


var maxSubArray = function(nums) {
let sum = 0;
let MaxSum = nums[0];
for(let i = 0;i<nums.length;i++){
    sum += nums[i]
    MaxSum = Math.max(MaxSum,sum) 
    if(sum<0) sum = 0;
}
return MaxSum
    
};


var majorityElement = function(nums) {

    let map = new Map();

    for(let i = 0;i<nums.length;i++){
        if(map.has(nums[i])){
          
          map.set(nums[i],(map.get(nums[i]))+1)
        }else  map.set(nums[i],1)
    }
    for(let [key,values] of map){
        
        if(values>(parseInt(nums.length/2))) return key
        
    }
    
};


console.log(majorityElement([2,2,1,1,1,2,2]));



var majorityElement = function(nums) {
    let ans = nums[0]
    let count = 0;
    for(let i = 0;i<nums.length;i++){
        if(count === 0) {
             ans = nums[i]
             count = 1
        }else if(nums[i] ==ans){
              count++
        }else count--
    }

    return ans
};

var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 0;i<prices.length;i++){
        minPrice = Math.min(minPrice,prices[i])
        maxProfit = Math.max(maxProfit,(prices[i]-minPrice))
    }

    return maxProfit
    
};