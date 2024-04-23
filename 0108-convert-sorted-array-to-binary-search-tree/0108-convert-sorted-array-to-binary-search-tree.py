
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        if not nums:
            return None
        
        mid = len(nums) // 2
        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums[:mid])
        root.right = self.sortedArrayToBST(nums[mid+1:])
        
        return root


nums1 = [-10, -3, 0, 5, 9]
nums2 = [1, 3]

solution = Solution()
print(solution.sortedArrayToBST(nums1))  # Output: [0,-3,9,-10,null,5]
print(solution.sortedArrayToBST(nums2))  # Output: [3,1]
