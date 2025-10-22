
 //* -Q 105. 875. Koko Eating Bananas

 
 var isValid = function(arr,speed , h){
    let totalhours = 0;
    for(let i =0;i<arr.length;i++){
          if(arr[i]% speed ===0) totalhours += arr[i]/speed
          else  totalhours += Math.ceil(arr[i]/speed)
       if(totalhours>h) return false
    }  
    return true
 }
var minEatingSpeed = function(piles, h) {
    let first = 1; let last = 0; let ans = -1;
    for(let i =0;i<piles.length;i++){
         last = Math.max(last,piles[i])
    }
    while(first<=last){
         let mid = parseInt((first+last)/2)
         if(isValid(piles,mid,h)){
            ans = mid;
            last = mid-1
         }else first = mid+1 
    }
        return ans
};