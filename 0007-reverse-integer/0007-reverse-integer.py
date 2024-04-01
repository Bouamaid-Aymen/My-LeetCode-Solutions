class Solution:
    def reverse(self, x: int) -> int:
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31
        str_x = str(x)

        sign = -1 if x < 0 else 1
        reversed_str = str_x[::-1].rstrip('-')
        reversed_int = sign * int(reversed_str)

        if reversed_int < INT_MIN or reversed_int > INT_MAX:
            return 0
        else:
            return reversed_int
