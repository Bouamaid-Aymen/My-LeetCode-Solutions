
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy

        while head and head.next:
            first_node = head
            second_node = head.next

            # Swap the nodes
            prev.next = second_node
            first_node.next = second_node.next
            second_node.next = first_node

            # Move to the next pair
            prev = first_node
            head = first_node.next

        return dummy.next
