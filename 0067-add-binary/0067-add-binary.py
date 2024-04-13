class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        result = []
        carry = 0
        i, j = len(a) - 1, len(b) - 1

        while i >= 0 or j >= 0:
            sum_ = carry
            if i >= 0:
                sum_ += int(a[i])
                i -= 1
            if j >= 0:
                sum_ += int(b[j])
                j -= 1
            result.append(str(sum_ % 2))
            carry = sum_ // 2

        if carry:
            result.append(str(carry))

        return ''.join(result[::-1])

# Example usage
solution = Solution()
print(solution.addBinary("11", "1"))  # Output: "100"
print(solution.addBinary("1010", "1011"))  # Output: "10101"
