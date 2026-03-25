/** 905. Sort Array By Parity
 * @param {number[]} nums
 * @return {number[]}
 */

 var swap = function(arr , i , j){
    let temp = arr[i];
    arr[i]  = arr[j];
    arr[j] = temp;
 }
var sortArrayByParity = function(nums) {
    
    let i = 0 , j = 0;

    while(i < nums.length){
         if(nums[i] % 2 === 0)swap(nums , i++, j++)
         else i++
    }
    return nums
};