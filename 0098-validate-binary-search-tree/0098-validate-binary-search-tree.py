class Solution(object):
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        def isBST(node, min_val, max_val):
            if not node:
                return True
            if node.val <= min_val or node.val >= max_val:
                return False
            return isBST(node.left, min_val, node.val) and isBST(node.right, node.val, max_val)
        
        return isBST(root, float('-inf'), float('inf'))
