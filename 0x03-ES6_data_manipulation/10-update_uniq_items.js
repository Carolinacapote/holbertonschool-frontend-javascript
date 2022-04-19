export default function updateUniqueItems(newMap) {
  if (newMap instanceof Map === false) throw Error('Cannot process');
  newMap.forEach((key, value) => {
    if (key === 1) {
      newMap.set(value, 100);
    }
  });
  return newMap;
}
