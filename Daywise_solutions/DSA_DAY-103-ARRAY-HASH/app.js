

/**2815. Max Pair Sum in an Array
 * @param {number[]} nums
 * @return {number}
 */

var largenum = function(n){
    let largeElem = 0;

    while(n>0){
        let rem = n % 10 

        largeElem = Math.max(largeElem, rem)

        n = parseInt(n/10)
    }
 
    console.log(largeElem)
    return largeElem
}
var maxSum = function(nums) {
   
    let groups = Array.from({ length: 10 }, () => []);

    for (let num of nums) {
        let d = largenum(num);
        groups[d].push(num);
    }
     let ans = -1;

     for(let i = 0;i<10 ; i++){

        if(groups[i].length >= 2){

             groups[i].sort((a,b)=> b-a) 

                      ans = Math.max(ans, groups[i][0] + groups[i][1]);
        }
     }
       
   return ans
};

console.log(maxSum([51,71,17,24,42])); 
