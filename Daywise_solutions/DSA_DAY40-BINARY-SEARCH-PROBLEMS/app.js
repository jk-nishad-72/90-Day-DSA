
//*—Q 103. Book Allocation Problems

var isValid = function(arr,upperlimit,k){
    let count = 1,sum = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]+ sum > upperlimit){
            count++;
            sum = arr[i];
            if(count>k) return false
        }else sum += arr[i]
    }
    
    return true
}


class Solution {
    findPages(arr, k) {
   
        
        if(k>arr.length) return -1;
        
        let first = 0, last = 0,ans = -1;
        for(let i =0;i<arr.length;i++){
            last += arr[i]
            first = Math.max(first,arr[i])
        }
        
        while(first <= last){
            
             let mid = parseInt((first+last)/2)
             
             if(isValid(arr,mid,k)) {
                 
                 ans = mid;
                 last = mid-1;
             }else first = mid+1
        }
        
        return ans 
        
    }
}


//*—Q 104. 1011. Capacity To Ship Packages Within D Days 

var isValid = function(arr,upperlimit,k){
    let count = 1,sum = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]+ sum > upperlimit){
            count++;
            sum = arr[i];
            if(count>k) return false
        }else sum += arr[i]
    }   
    return true
}
var shipWithinDays = function(weights, days) {
        if(days>weights.length) return -1;
        let first = 0, last = 0,ans = -1;
        for(let i =0;i<weights.length;i++){
            last += weights[i]
            first = Math.max(first,weights[i])
        }    
        while(first <= last){    
             let mid = parseInt((first+last)/2)     
             if(isValid(weights,mid,days)) {        
                 ans = mid;
                 last = mid-1;
             }else first = mid+1
        }
        return ans  
};