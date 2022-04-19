export default function getStudentIdsSum(studentsList) {
  const studentsIds = studentsList.map((student) => student.id);
  const initialValue = 0;
  const idSum = studentsIds.reduce(
    (previousId, currentId) => previousId + currentId,
    initialValue,
  );
  return idSum;
}
