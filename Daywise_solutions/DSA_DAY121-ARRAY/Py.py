

class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        map = {}
        for i in range(len(nums)):
            if nums[i] in map:
                map[nums[i]] += 1
            else:
                map[nums[i]] = 1
        for key, value in map.items():
            if value == 1:
                return key
            
        
solution = Solution()
print(solution.singleNumber([2,2,3,2]))    