
// *—Q 67.Two Sum ✔️
var twoSum = function(nums, target){    
    let map = new Map();
      let ans = [-1,-1]
    for(let i =0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            ans[0]=map.get(target-nums[i])
            ans[1] =i
            return ans 
        }else{
            map.set(nums[i],i)
        }
    }
};




//*—Q 68.First letter appears twice ✔️

var repeatedCharacter = function(s) {
    let map = new Map();
    for(let i = 0;s.length;i++){
     let ch = s.charAt(i);
    if(map.has(ch)){
        map.set(ch,map.get(ch)+1)
        if(map.get(ch)==2) return ch;

       }else{
        map.set(ch,1)
         }
    }
    
};


//*—Q 69.Sort the people



var sortPeople = function(names, heights) {
    let map = new Map()
     let ans = []
     for(let i = 0;i<names.length;i++){
          map.set(heights[i],names[i])
     }
    heights.sort((a,b)=>b-a)
    for(let j =0;j<heights.length;j++){
        ans.push(map.get(heights[j]))
    }
    return ans 
};