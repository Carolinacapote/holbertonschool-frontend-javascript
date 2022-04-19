export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) return [];
  const studentsIds = studentsList.map((student) => student.id);
  return studentsIds;
}
