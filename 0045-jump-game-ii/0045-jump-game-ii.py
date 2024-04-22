class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        if n == 1:
            return 0
        
        jumps = 0
        curr_end = 0
        furthest = 0
        
        for i in range(n - 1):
            furthest = max(furthest, i + nums[i])
            if i == curr_end:
                jumps += 1
                curr_end = furthest
                
        return jumps
