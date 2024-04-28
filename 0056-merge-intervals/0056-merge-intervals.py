class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
        if not intervals:
            return []
        
        intervals.sort(key=lambda x: x[0])  
        
        merged_intervals = [intervals[0]]
        for interval in intervals[1:]:
            if interval[0] <= merged_intervals[-1][1]: 
                merged_intervals[-1][1] = max(merged_intervals[-1][1], interval[1]) 
            else:
                merged_intervals.append(interval)
        
        return merged_intervals

solution = Solution()
print(solution.merge([[1,3],[2,6],[8,10],[15,18]]))  
print(solution.merge([[1,4],[4,5]])) 