/**4. Median of Two Sorted Arrays

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let i = 0, j = 0;
    let count = 0;
    let prev = 0, curr = 0;
    let target = Math.floor((m + n) / 2);
    while (count <= target) {
        prev = curr;
        if (i < m && (j >= n || nums1[i] <= nums2[j])) {
            curr = nums1[i];
            i++;
        } else {
            curr = nums2[j];
            j++;
        }
        count++;
    }
    if ((m + n) % 2 === 0) {
        return (prev + curr) / 2;
    } else {
        return curr;
    }
};

console.log(findMedianSortedArrays(nums1 = [1,2], nums2 = [3,4]));
