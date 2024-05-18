from collections import defaultdict, deque

class Solution(object):
    def findOrder(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: List[int]
        """
        graph = defaultdict(list)
        indegree = [0] * numCourses
        
        for course, pre in prerequisites:
            graph[pre].append(course)
            indegree[course] += 1
        
        queue = deque([course for course in range(numCourses) if indegree[course] == 0])
        order = []
        
        while queue:
            pre = queue.popleft()
            order.append(pre)
            for course in graph[pre]:
                indegree[course] -= 1
                if indegree[course] == 0:
                    queue.append(course)
        
        return order if len(order) == numCourses else []
