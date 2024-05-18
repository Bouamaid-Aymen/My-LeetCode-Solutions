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
        
        # Build the graph and calculate the indegree of each course
        for course, pre in prerequisites:
            graph[pre].append(course)
            indegree[course] += 1
        
        # Initialize a queue with courses having no prerequisites
        queue = deque([course for course in range(numCourses) if indegree[course] == 0])
        order = []
        
        # Perform topological sorting
        while queue:
            pre = queue.popleft()
            order.append(pre)
            for course in graph[pre]:
                indegree[course] -= 1
                if indegree[course] == 0:
                    queue.append(course)
        
        # Check if all courses can be taken
        return order if len(order) == numCourses else []
