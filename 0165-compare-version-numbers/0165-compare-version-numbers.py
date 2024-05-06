class Solution(object):
    def compareVersion(self, version1, version2):
        """
        :type version1: str
        :type version2: str
        :rtype: int
        """
        parts1 = version1.split('.')
        parts2 = version2.split('.')
        
        for i in range(max(len(parts1), len(parts2))):
            v1 = int(parts1[i]) if i < len(parts1) else 0
            v2 = int(parts2[i]) if i < len(parts2) else 0
            
            if v1 < v2:
                return -1
            elif v1 > v2:
                return 1
        
        return 0

solution = Solution()
print(solution.compareVersion("1.01", "1.001"))  
print(solution.compareVersion("1.0", "1.0.0"))   
print(solution.compareVersion("0.1", "1.1"))     
