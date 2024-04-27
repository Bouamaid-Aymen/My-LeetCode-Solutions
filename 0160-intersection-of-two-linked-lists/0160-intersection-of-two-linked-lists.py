class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        lenA, tailA = self.findLengthAndTail(headA)
        lenB, tailB = self.findLengthAndTail(headB)
        
        if tailA is not tailB:
            return None
        
        longer = headA if lenA > lenB else headB
        shorter = headB if lenA > lenB else headA
        for _ in range(abs(lenA - lenB)):
            longer = longer.next
        
        while longer is not shorter:
            longer = longer.next
            shorter = shorter.next
        
        return longer
    
    def findLengthAndTail(self, head):
        length = 0
        tail = None
        current = head
        while current:
            length += 1
            tail = current
            current = current.next
        return length, tail