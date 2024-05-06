class Solution(object):
    def maximumGap(self, nums):
        if len(nums) < 2:
            return 0

        min_val = min(nums)
        max_val = max(nums)

        interval = max(1, (max_val - min_val) // (len(nums) - 1))

        bucket_size = (max_val - min_val) // interval + 1

        buckets = [[float('inf'), float('-inf')] for _ in range(bucket_size)]

        for num in nums:
            index = (num - min_val) // interval
            buckets[index][0] = min(buckets[index][0], num)
            buckets[index][1] = max(buckets[index][1], num)

        max_diff = 0
        prev_max = min_val

        for bucket in buckets:
            if bucket[0] != float('inf'):
                max_diff = max(max_diff, bucket[0] - prev_max)
                prev_max = bucket[1]

        return max_diff
