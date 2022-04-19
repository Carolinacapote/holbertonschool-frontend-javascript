/**
 * returns a boolean if all the elements in the array exist within the set
 */
export default function hasValuesFromArray(set, arr) {
  let result = false;
  arr.forEach((element) => {
    result = set.has(element);
  });
  return result;
}
