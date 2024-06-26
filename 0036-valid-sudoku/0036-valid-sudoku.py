from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
      
        def has_duplicates(nums: List[str]) -> bool:
            seen = set()
            for num in nums:
                if num != '.':
                    if num in seen:
                        return True
                    seen.add(num)
            return False

        for i in range(9):
            if has_duplicates(board[i]) or has_duplicates([board[j][i] for j in range(9)]):
                return False

        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                subgrid = [board[x][y] for x in range(i, i+3) for y in range(j, j+3)]
                if has_duplicates(subgrid):
                    return False
        
        return True
board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

solution = Solution()
print(solution.isValidSudoku(board))  
