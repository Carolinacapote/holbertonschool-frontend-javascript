/**
 *
 * @param {*} set
 * @param {*} startString
 * @returns
 */
export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';
  let result = '';
  set.forEach((element) => {
    if (element.slice(0, startString.length) === startString) {
      result = `${result.concat(element.slice(startString.length, element.length))}-`;
    }
  });
  return result.slice(0, -1);
}
