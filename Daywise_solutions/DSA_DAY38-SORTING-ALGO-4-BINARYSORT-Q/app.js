
//*--Q 97. 704. Binary Search

var search = function(nums, target) {
    
     let first = 0; let last = nums.length-1;
      while(first<=last){
        let mid = parseInt((first+last)/2)
        if(nums[mid] === target) return mid
        else if(nums[mid]<target) first = mid+1;
        else last  = mid-1
      }
      return -1


};

//*--Q 98. 35. Search Insert Position

var searchInsert = function(nums, target) {
      let first = 0; let last = nums.length-1;
      while(first<=last){
        let mid = parseInt((first+last)/2)
        if(nums[mid] === target) return mid
        else if(nums[mid]<target) first = mid+1;
        else last  = mid-1
      }
      return first    
};


//*-—Q 99. 34. Find First and Last Position of Element in Sorted Array

var findFirstEndPosition = (nums,target,isStartIndex)=>{
     let first = 0;let last = nums.length-1;let ans = -1;
     while(first<=last) {
     let mid = Math.floor((first+last)/2) 
     if(nums[mid] === target) {
         if(isStartIndex){
              ans = mid
              last  = mid-1; 
         }else{
            ans = mid
            first = mid+1
         }
     }
     else if(nums[mid]<target) first = mid+1;
     else last = mid -1 ;    
     }

   return ans 
}

var searchRange = function(nums, target) {

  let start = findFirstEndPosition(nums,target,true);
  let end = findFirstEndPosition(nums,target,false)
  return [start,end]
    
};


//*—Q 100. **3159. Find Occurrences of an Element in an Array [homework]**



let   nums = [1,3,1,7], queries = [1,3,2,4], x = 1


var occurrencesOfElement = function(nums, queries, x) {
   let occurence = []; 
   let ans = [] ;

    for(let i = 0;i<nums.length;i++){
         if(x === nums[i]) occurence.push(i)
    }

     console.log(occurence);

      for(let i = 0;i<queries.length;i++){
          if(queries[i]>occurence.length) ans.push(-1) 
          else ans.push(occurence[queries[i] -1]) 
           
      }

    return ans 
};


console.log(occurrencesOfElement(nums,queries,x));
