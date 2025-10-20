
var peakIndexInMountainArray = function(arr) {

    let first = 0;
    let last = arr.length-1;

    while(first<last){

    let mid = Math.floor((first+last)/2); 

    if(arr[mid]<= arr[mid+1]) first = mid+1 

    else  last = mid 

    }

    return first 
    
};

console.log(peakIndexInMountainArray([0,1,0]));


var search = function(nums, target) {
      let f = 0,l = nums.length-1;
      while(f<=l){
        let m = parseInt((f+l)/2)
         if(nums[m]==target) return m
         if(nums[f] <= nums[m]){
            if(nums[f]<=target && target <= nums[m]) l = m
            else f = m+1
         }
         else{
            if(nums[m+1] <= target && target <= nums[l]) f = m+1
            else l = m 
         } 
      }
 return -1
};
