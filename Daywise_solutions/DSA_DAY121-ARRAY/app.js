

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    // let map = new Map();

    // for(let  i = 0;i<nums.length;i++){

    //      if(map.has(nums[i])){
    //          map.set(nums[i], map.get(nums[i]) + 1);
    //      }else{
    //          map.set(nums[i],1);
    //      }
    // }
    
    // for (let [key, value] of map) {
    //     if(value === 1){
    //         return key;
    //     }}
    // console.log(map)

      nums.sort((a, b) => a - b);

    for(let i = 0;i<nums.length;i++){
      
        if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]){
            return nums[i];
        }
    }   
   

};

console.log(singleNumber( nums = [2,2,3,2]));


