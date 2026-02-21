
// 4. Median of Two Sorted Arrays
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {

        int m = nums1.length;
        int n = nums2.length;
        int[] smaller = m > n ? nums2 : nums1;
        int[] larger =  m > n ? nums1 : nums2;

        int total = m+n;
        int low = 0 , high = smaller.length;

        while(low <= high){
             
         int partitionX = (low + high) /2;
         int partitionY = (total + 1)/2 - partitionX;

         int l1 = partitionX == 0 ? Integer.MIN_VALUE:smaller[partitionX-1];
         int r1 = partitionX == smaller.length ? Integer.MAX_VALUE:smaller[partitionX];
         int l2 = partitionY == 0 ? Integer.MIN_VALUE:larger[partitionY-1];
         int r2 = partitionY == larger.length ? Integer.MAX_VALUE:larger[partitionY];

         if(l1 <= r2 && l2 <= r1){
             if(total % 2 == 0){
                 return (double)(Math.max(l1,l2) + Math.min(r1,r2))/2;
             }else{
                 return (double)Math.max(l1,l2);
             }
         }else if(l1 > r2){
             high = partitionX - 1;
         }else{
             low = partitionX + 1;
         }
        }
        return 0.0;
    }
}



class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums1 = {1, 3};
        int[] nums2 = {2};
        double median = solution.findMedianSortedArrays(nums1, nums2);
        System.out.println("Median: " + median); // Output: Median: 2.0
    }
}


