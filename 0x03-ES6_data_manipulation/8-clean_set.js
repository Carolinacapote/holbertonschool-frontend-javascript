/**
 *returns a string of all the set values that start with a specific string
 */
export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) return '';
  let result = '';
  set.forEach((element) => {
    if (typeof element === 'string') {
      if (element.slice(0, startString.length) === startString) {
        result = `${result.concat(element.slice(startString.length, element.length))}-`;
      }
    }
  });
  return result.slice(0, -1);
}
