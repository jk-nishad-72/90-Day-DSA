

/*
 *697. Degree of an Array
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map();
    let degree = 0;
    let minLength = 0;
    for(let i = 0; i < nums.length; i++){   
        if(map.has(nums[i])){
            let obj = map.get(nums[i]);
            obj.count++;
            obj.end = i;
            map.set(nums[i], obj);
        }   
        else{
            map.set(nums[i], {count: 1, start: i, end: i});
        }
    }
    for(let [key, value] of map){
        if(value.count > degree){
            degree = value.count;
            minLength = value.end - value.start + 1;
        }
        else if(value.count === degree){
            minLength = Math.min(minLength, value.end - value.start + 1);
        }
    }
    return minLength;
};

console.log(findShortestSubArray([1,2,2,3,1,4,2]));


