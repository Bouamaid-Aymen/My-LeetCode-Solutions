class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        max_reach = 0
        for i in range(len(nums)):
            if i > max_reach:
                return False
            max_reach = max(max_reach, i + nums[i])
            if max_reach >= len(nums) - 1:
                return True
        return False

# Example usage
solution = Solution()
print(solution.canJump([2,3,1,1,4]))  # Output: True
print(solution.canJump([3,2,1,0,4]))  # Output: False
