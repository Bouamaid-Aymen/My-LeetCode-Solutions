# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        result = []
        self.inorderTraversalHelper(root, result)
        return result
    
    def inorderTraversalHelper(self, node, result):
        if node is None:
            return
        self.inorderTraversalHelper(node.left, result)
        result.append(node.val)
        self.inorderTraversalHelper(node.right, result)

# Example usage
root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

solution = Solution()
print(solution.inorderTraversal(root))  # Output: [1, 3, 2]
