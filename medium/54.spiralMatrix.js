/*
  Given an m x n matrix, return all elements of the matrix in spiral order.

  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

// My solution

{
  const spiralOrder = function (matrix) {
    const result = [];

    let verCoord = Math.ceil((matrix.length - 1) / 2);
    let horCoord = Math.ceil((matrix[0].length - 1) / 2);

    let position = "left";

    while (verCoord >= 0 && horCoord >= 0) {
      result.unshift(matrix[verCoord][horCoord]);

      if (horCoord === 0) {
        position = "bottom";
      }
      if (verCoord === matrix.length - 1) {
        position = "right";
      }
      if (horCoord === matrix[0].length - 1) {
        position = "top";
      }
      if (verCoord === 0) {
        position = "left";
      }

      switch (position) {
        case "right":
          horCoord++;
          break;
        case "bottom":
          verCoord++;
          break;
        case "left":
          horCoord--;
          break;
        case "top":
          verCoord--;
      }
    }

    return result;
  };
}

// Best Solution

{
  const spiralOrder = function (matrix) {
    const res = [];
    while (matrix.length) {
      const first = matrix.shift();
      res.push(...first);
      for (const m of matrix) {
        let val = m.pop();
        if (val) res.push(val);
        m.reverse();
      }
      matrix.reverse();
    }
    return res;
  };
}
