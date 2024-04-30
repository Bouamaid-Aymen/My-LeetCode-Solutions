class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        max_product = nums[0]
        min_product = nums[0]
        result = nums[0]
        for i in range(1, len(nums)):
            temp_max = max(nums[i], max_product * nums[i], min_product * nums[i])
            temp_min = min(nums[i], max_product * nums[i], min_product * nums[i])
            result = max(result, temp_max)
            max_product = temp_max
            min_product = temp_min

        return result
