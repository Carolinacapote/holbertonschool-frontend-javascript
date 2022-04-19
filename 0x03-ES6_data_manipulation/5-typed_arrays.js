export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1 || position < 0) {
    throw Error('Position outside range');
  }
  const newArray = new ArrayBuffer(length);
  const int8View = new Int8Array(newArray);
  int8View[position] = value;
  return new DataView(newArray, 0);
}
