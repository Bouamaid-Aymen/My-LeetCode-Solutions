class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        prev = None
        curr = head
        
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        
        return prev

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

nodes = [ListNode(val) for val in range(1, 6)]

for i in range(len(nodes) - 1):
    nodes[i].next = nodes[i + 1]

solution = Solution()
reversed_head = solution.reverseList(nodes[0])

while reversed_head:
    print(reversed_head.val)
    reversed_head = reversed_head.next
