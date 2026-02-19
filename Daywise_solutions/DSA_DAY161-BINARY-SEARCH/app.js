

/*
 *4. Median of Two Sorted Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//  brute force approach
var findMedianSortedArrays = function(nums1, nums2) {
    
    let nums3 = []
    let i = 0
    let j = 0
    let k = 0
    while( i < nums1.length && j < nums2.length){

          if(nums1[i] < nums2[j]){
            nums3[k++] = nums1[i++]
          } else {
            nums3[k++] = nums2[j++]
          }
    }
    while(i < nums1.length){
      nums3[k++] = nums1[i++]
    }
    while(j < nums2.length){
      nums3[k++] = nums2[j++]
    }
    let n = nums3.length
    if(n % 2 === 0){
      return (nums3[n/2 - 1] + nums3[n/2]) / 2
    } else {
      return nums3[Math.floor(n/2)]
    }
    
};

// console.log(findMedianSortedArrays(nums1 = [1,2], nums2 = [3,4]));



function findMedianSortedArrays2(nums1, nums2) {
    
}

console.log(findMedianSortedArrays2(nums1 = [1,2], nums2 = [3,4]));


