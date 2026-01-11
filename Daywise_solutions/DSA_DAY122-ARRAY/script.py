
class Solution(object):
    def findMiddleIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        total_sum = sum(nums)
        print("Total sum of array:", total_sum)
        left_sum = 0
        right_sum = total_sum
        for i in range(len(nums)):
            right_sum -= nums[i]
            if left_sum == right_sum:
                return i
            left_sum += nums[i]
        return -1   
# Example usage:
solution = Solution()
print(solution.findMiddleIndex([2, 3, -1, 8, 4]))  # Output: 3
print(solution.findMiddleIndex([1, -1, 4]))         # Output: