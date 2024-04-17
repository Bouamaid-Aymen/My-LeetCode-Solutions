class Solution(object):
    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        if not s:
            return 0

        # Remove leading whitespace
        s = s.lstrip()

        if not s:
            return 0

        # Check for sign
        sign = 1
        if s[0] == '-':
            sign = -1
            s = s[1:]
        elif s[0] == '+':
            s = s[1:]

        # Read digits
        result = 0
        for char in s:
            if not char.isdigit():
                break
            result = result * 10 + int(char)

        # Apply sign and clamp to 32-bit integer range
        result *= sign
        result = max(min(result, 2**31 - 1), -2**31)

        return result
