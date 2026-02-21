
// 4. Median of Two Sorted Arrays
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {

        int m = nums1.length;
        int n = nums2.length;
        int[] smaller = m > n ? n : m;
        int[] larger =  m > n ? m : n;

        int total = m+n;
        int low = 0 , high = smaller.length;

        while(low <= high){
             
         int partitionX = (low + high) /2;
         int partitionY = (total + 1)/2 - partitionX;

         int l1 = partitionX == 0 ? Integer.MIN_VALUE:smaller[]
        }
    }
}

