from collections import deque

class Solution(object):
    def zigzagLevelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if not root:
            return []

        result = []
        queue = deque([root])
        level = 0

        while queue:
            level_length = len(queue)
            current_level = []

            for _ in range(level_length):
                node = queue.popleft()
                current_level.append(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            if level % 2 == 1:
                current_level.reverse()

            result.append(current_level)
            level += 1

        return result
