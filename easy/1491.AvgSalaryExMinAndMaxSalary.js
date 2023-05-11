/*

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

| Input | Output |
|-----|----|
|[4000,3000,1000,2000]|2500|

*/

var average = function (salary) {
  const minAndMaxSalary = [Math.min(...salary), Math.max(...salary)];

  const { allCount, length } = salary.reduce(
    (acc, item) => {
      if (!minAndMaxSalary.includes(item)) {
        acc.allCount += item;
        acc.length += 1;
      }

      return acc;
    },
    { allCount: 0, length: 0 }
  );

  return allCount / length;
};
