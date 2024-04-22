class Solution(object):
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        def backtrack(curr_permutation, remaining_nums):
            if not remaining_nums:
                result.append(curr_permutation)
                return
            for i in range(len(remaining_nums)):
                backtrack(curr_permutation + [remaining_nums[i]], remaining_nums[:i] + remaining_nums[i+1:])
        
        result = []
        backtrack([], nums)
        return result
