


/**
 * 
 * 
—Q 92.  11.  Container with most Water [area = length*breadth] 

   a) brute force 

   b) optimise  2 pointer
 */




   //* a) brute force 
var maxArea = function(height){
 
 let ans  = 0;

 for(let i = 0;i<height.length;i++){
    for(let j = i+1;j<height.length;j++){
        ans = Math.max(ans,(Math.min(height[i] , height[j])*(j-i)))
    }
 }

 return ans

    
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));


//* b) optimise  2 pointer

var maxArea2 = function(height){
 
let ans = 0;
let i = 0;
let j = height.length-1;
while(i<j){
ans = Math.max(ans,(Math.min(height[i] , height[j])* (j-i)))

 if(height[i] < height[j]) i++
 else j--
}

 return ans

    
};


console.log(maxArea2([1,8,6,2,5,4,8,3,7]));
