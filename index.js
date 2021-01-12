/**
 * This function takes array of length >= 0, and a positive integer N, as it arguments and return the contents of the array divided into N equally sized arrays..
 *
 * @param {array} array - An array param
 * @param {number} size - A size param
 * @return {array} - return array
 *
 * @example
 *
 *     groupArrayElements([1, 2, 3, 4, 5], 3);
 */

const groupArrayElements = (array, size) => {
  // try catch block for error handling
  try {
    // A validation check to see if first argument is an Array and it is not empty
    if (!Array.isArray(array) || array.length <= 0)
      throw new Error(
        'First argument must be an array and should not be empty.'
      );

    // A Validation check to see if second argument is a Positive number
    if (typeof size !== 'number' || size < 0)
      throw new Error(
        'Second argument must be a positive number and greater than zero.'
      );

    // copy array to keep original array as is
    const copyArray = [...array];

    // An empty array to hold the grouped arrays
    const groupedArray = [];

    // Assign a variable to find items per group
    let itemsPerGroup = Math.ceil(array.length / size);

    // Loops array by "size" times as we only need "size" of arrays
    for (let i = 0; i < size; i++) {
      // Each iteration remove 'itemPerGroup' of elements from 'array' starting at 0 and pushes into the output array
      groupedArray.push(copyArray.splice(0, itemsPerGroup));
    }

    // check to see if array is divided equally by size and return grouped array,
    if (array.length % size === 0) {
      // Returns array grouped into nested arrays of argument 'size'
      return groupedArray;
    } else {
      // remainder
      const remainder = Math.floor(array.length / size);

      // last array in group
      const lastArray = groupedArray[size - 1];

      // check if remainder equals to length of last array and return groupedArray
      // else throw error
      if (lastArray.length === remainder) {
        return groupedArray;
      } else {
        throw new Error(
          'Error generating grouped array as length of the original array cannot be divided equally by size'
        );
      }
    }
  } catch (error) {
    return error.message;
  }
};

// Exports groupArrayElements function so it can be accessed and used by other files
module.exports = groupArrayElements;
