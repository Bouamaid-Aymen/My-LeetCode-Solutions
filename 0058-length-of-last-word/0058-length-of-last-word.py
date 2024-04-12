class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        # Trim the trailing spaces
        s = s.rstrip()
        # Find the index of the last space
        last_space_index = s.rfind(' ')
        if last_space_index == -1:
            return len(s)
        else:
            return len(s) - last_space_index - 1
