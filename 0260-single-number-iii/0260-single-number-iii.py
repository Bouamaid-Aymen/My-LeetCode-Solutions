class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        xor_result = 0
        for num in nums:
            xor_result ^= num
        
        rightmost_set_bit = 1
        while (rightmost_set_bit & xor_result) == 0:
            rightmost_set_bit <<= 1
        
        group1, group2 = 0, 0
        for num in nums:
            if num & rightmost_set_bit:
                group1 ^= num
            else:
                group2 ^= num
        
        return [group1, group2]
