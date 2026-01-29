

/*
 *229. Majority Element II
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    //   let ans = []
    //   ans.push(nums[0])
    // let count = 0;
    // for(let i = 0;i<nums.length;i++){
    //     if(count === 0) {
    //          ans.pop()
    //          ans.push(nums[i])
    //          count = 1
    //     }else if(nums[i] ==ans){
    //           count++
    //     }else count--
    // }
    // return ans  
    let map = new Map();
    let ans = [];
    let n = Math.floor(nums.length / 3);    
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) === n + 1) {
            ans.push(num);
        }
    }   
    return ans;
};

console.log(majorityElement([1,2])) 