SELECT e.name AS Employee, d.name AS Department, e.salary AS Salary
FROM Employee e
JOIN (
    SELECT departmentId, MAX(salary) AS max_salary
    FROM Employee
    GROUP BY departmentId
) emax ON e.departmentId = emax.departmentId AND e.salary = emax.max_salary
JOIN Department d ON e.departmentId = d.id;
