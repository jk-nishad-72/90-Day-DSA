
/*
*4. Median of Two Sorted Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let smaller = nums1.length > nums2.length ? nums2 : nums1;
    let larger =  nums1.length > nums2.length ? nums1 : nums2;

    let total = nums1.length + nums2.length;
    let low = 0 , high = smaller.length;
    while(low <= high){
        let partitionSmaller = Math.floor((low + high) / 2);
        let partitionLarger = Math.floor((total + 1) / 2) - partitionSmaller;

        let maxLeftSmaller = partitionSmaller === 0 ? Number.MIN_SAFE_INTEGER : smaller[partitionSmaller - 1];
        let minRightSmaller = partitionSmaller === smaller.length ? Number.MAX_SAFE_INTEGER : smaller[partitionSmaller];
        let maxLeftLarger = partitionLarger === 0 ? Number.MIN_SAFE_INTEGER : larger[partitionLarger - 1];
        let minRightLarger = partitionLarger === larger.length ? Number.MAX_SAFE_INTEGER : larger[partitionLarger];

        if(maxLeftSmaller <= minRightLarger && maxLeftLarger <= minRightSmaller){
            if(total % 2 === 0){
                return (Math.max(maxLeftSmaller, maxLeftLarger) + Math.min(minRightSmaller, minRightLarger)) / 2;
            }else{
                return Math.max(maxLeftSmaller, maxLeftLarger);
            }
        }else if(maxLeftSmaller > minRightLarger){
            high = partitionSmaller - 1;
        }else{
            low = partitionSmaller + 1;
        }
    }
    return -1; // This line should never be reached if the input arrays are valid
};

console.log(findMedianSortedArrays([1,2], [3,4]));
