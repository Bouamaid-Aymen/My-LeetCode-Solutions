class Solution(object):
    def rotateRight(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        if not head or k == 0:
            return head
        
        length = 1
        tail = head
        while tail.next:
            length += 1
            tail = tail.next
        
        k %= length
        
        if k == 0:
            return head
        
        prev = head
        for _ in range(length - k - 1):
            prev = prev.next
        
        # Rotate the list
        new_head = prev.next
        prev.next = None
        tail.next = head
        
        return new_head
