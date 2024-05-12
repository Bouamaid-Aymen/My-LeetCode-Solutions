/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Create adjacency list representation of the graph
    const graph = Array.from({ length: numCourses }, () => []);
    for (const [course, preReq] of prerequisites) {
        graph[course].push(preReq);
    }

    // Colors to mark visited nodes (0 = unvisited, 1 = visiting, 2 = visited)
    const colors = Array(numCourses).fill(0);

    // DFS function to detect cycles
    const hasCycle = (course) => {
        if (colors[course] === 2) return false; // Already visited, no cycle
        if (colors[course] === 1) return true;  // Cycle detected

        colors[course] = 1; // Mark as visiting
        for (const preReq of graph[course]) {
            if (hasCycle(preReq)) {
                return true; // Cycle found
            }
        }
        colors[course] = 2; // Mark as visited
        return false;
    };

    // Check for cycle in each course
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) {
            return false; // Cycle found, impossible to finish all courses
        }
    }

    return true; // No cycle found, all courses can be finished
};

// Test cases
console.log(canFinish(2, [[1,0]])); // Output: true
console.log(canFinish(2, [[1,0],[0,1]])); // Output: false
