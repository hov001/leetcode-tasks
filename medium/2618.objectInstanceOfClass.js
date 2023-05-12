/*

Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

*/

{
  var checkIfInstanceOf = function (obj, classFunction) {
    const isValidObj = obj ?? null;

    const isValidInstance =
      classFunction instanceof Function && isValidObj !== null;

    return isValidInstance && new Object(obj) instanceof classFunction;
  };
}
