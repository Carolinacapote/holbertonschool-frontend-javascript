export default function getStudentsByLocation(studentsList, city) {
  const newList = studentsList.filter((student) => student.location === city);
  return newList;
}
