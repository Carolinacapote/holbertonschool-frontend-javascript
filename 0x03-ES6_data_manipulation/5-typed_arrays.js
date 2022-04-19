export default function createInt8TypedArray(length, position, value) {
  const newArray = new ArrayBuffer(length);
  const int8View = new Int8Array(newArray);
  int8View[position] = value;
  return newArray;
}
