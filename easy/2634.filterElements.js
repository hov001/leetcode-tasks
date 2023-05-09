/*

Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
Please solve it without the built-in Array.filter method.

*/

var filter = function (arr, fn) {
  const newArray = [];

  for (let idx = 0; idx < arr.length; idx++) {
    if (fn(arr[idx], idx, arr)) newArray.push(arr[idx]);
  }

  return newArray;
};
